import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";


function AdminLogin(){


const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const [error,setError] = useState("");

const [loading,setLoading] = useState(false);


const navigate = useNavigate();


const { login } = useContext(AuthContext);





const handleLogin = async(e)=>{


e.preventDefault();

setError("");

setLoading(true);



try{


const response = await api.post("/login",{

email,

password

});





if(response.data.token && response.data.user.role === "admin"){



console.log("ADMIN LOGIN SUCCESS");



// Save authentication

login(

response.data.user,

response.data.token

);



// Redirect dashboard

navigate("/admin/dashboard");



}

else if(response.data.user && response.data.user.role !== "admin"){



setError("Access denied. Admin account required.");



}

else{


setError("Invalid login response.");

}



}



catch(err){



console.log(err.response?.data);



setError(

err.response?.data?.message ||

"Invalid admin credentials"

);



}



finally{


setLoading(false);


}



};







return(


<div className="min-h-screen bg-black flex items-center justify-center">


<div className="bg-[#111] p-8 rounded-xl w-96 text-white">



<h1 className="text-xl font-bold mb-6">

ADMIN LOGIN

</h1>





{

error &&

<p className="text-red-400 text-sm mb-4">

{error}

</p>

}





<form onSubmit={handleLogin}>


<input


type="email"


placeholder="Admin Email"


className="w-full p-3 mb-4 bg-black border"


value={email}


onChange={(e)=>setEmail(e.target.value)}


/>







<input


type="password"


placeholder="Password"


className="w-full p-3 mb-4 bg-black border"


value={password}


onChange={(e)=>setPassword(e.target.value)}


/>








<button


type="submit"


disabled={loading}


className="w-full bg-white text-black p-3 disabled:bg-gray-400"


>


{

loading

?

"Checking..."

:

"Login Admin"

}



</button>







</form>






</div>



</div>



)


}


export default AdminLogin;