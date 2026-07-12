import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";


function Register(){


const navigate = useNavigate();



const [formData,setFormData] = useState({

    name:"",
    email:"",
    password:""

});


const [message,setMessage] = useState("");





const handleChange=(e)=>{


setFormData({

    ...formData,

    [e.target.name]:e.target.value

});


};







const handleSubmit=async(e)=>{


e.preventDefault();


try{


const response = await api.post(
"/register",
formData
);



console.log(response.data);



setMessage(
"Registration Successful. Redirecting..."
);



setTimeout(()=>{


navigate("/login");


},1500);



}



catch(error){


console.log(error.response?.data);



setMessage(

error.response?.data?.message ||

"Registration Failed"

);



}



};






return(


<div className="min-h-[88vh] bg-[#070708] flex items-center justify-center p-5">


<div className="bg-[#0D0D0F] border border-[#141416] rounded-xl p-8 w-full max-w-md text-white">



<h1 className="text-xl font-bold mb-6">

Create Account

</h1>





{

message &&

<p className="text-sm text-gray-400 mb-4">

{message}

</p>

}





<form onSubmit={handleSubmit} className="space-y-4">





<input

type="text"

name="name"

placeholder="Name"

value={formData.name}

onChange={handleChange}

className="w-full bg-black border p-3"

/>






<input

type="email"

name="email"

placeholder="Email"

value={formData.email}

onChange={handleChange}

className="w-full bg-black border p-3"

/>







<input

type="password"

name="password"

placeholder="Password"

value={formData.password}

onChange={handleChange}

className="w-full bg-black border p-3"

/>








<button

className="w-full bg-white text-black p-3"

>

Register

</button>





</form>




</div>


</div>


);


}


export default Register;