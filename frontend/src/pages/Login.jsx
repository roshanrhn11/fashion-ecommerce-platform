import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";


function Login() {


  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const [error,setError] = useState("");

  const [loading,setLoading] = useState(false);



  const navigate = useNavigate();


  const { login } = useContext(AuthContext);



  const authCoverImage =
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80";





  const handleLogin = async(e)=>{


    e.preventDefault();

    setError("");

    setLoading(true);



    try{


      const response = await api.post("/login",{


        email,

        password


      });






      if(response.data.status && response.data.token){



        // Block admin from customer login

        if(response.data.user.role === "admin"){


          setError(
            "Admin accounts must use Admin Login."
          );


          return;


        }




        login(

          response.data.user,

          response.data.token

        );



        navigate("/");



      }


      else{


        setError(
          "Invalid login response."
        );


      }





    }


    catch(err){



      console.log(err.response?.data);



      setError(

        err.response?.data?.message ||

        "Authorization failed."

      );



    }



    finally{


      setLoading(false);


    }



  };







return (

<div className="min-h-[88vh] bg-[#070708] flex items-center justify-center p-4 md:p-10">


<div className="w-full max-w-4xl bg-[#0D0D0F] border border-[#141416] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl">





<div

className="hidden md:block bg-cover bg-center relative"

style={{

backgroundImage:

`linear-gradient(to right, rgba(13,13,15,0.2), rgba(13,13,15,1)), url(${authCoverImage})`

}}

>



<div className="absolute bottom-10 left-10 max-w-xs">


<span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">

MEMBERSHIP VAULT

</span>



<p className="text-xs text-gray-300 mt-2 leading-relaxed">

Unlock prioritized dispatch logistics and private collection drops.

</p>



</div>


</div>









<div className="p-8 md:p-12 flex flex-col justify-center">



<div className="mb-8">


<h1 className="text-lg font-black tracking-[0.25em] uppercase text-white">

Identity Gateway

</h1>



<p className="text-[10px] text-gray-500 uppercase tracking-widest">

Customer Secure Login

</p>


</div>







{

error &&

<div className="mb-6 p-3 bg-rose-950/30 border border-rose-900 rounded text-rose-400 text-xs">

{error}

</div>

}








<form onSubmit={handleLogin} className="space-y-5">





<div>


<label className="text-[9px] text-gray-500 uppercase tracking-widest block mb-2">

Email

</label>



<input


type="email"

required

value={email}

onChange={(e)=>setEmail(e.target.value)}

placeholder="customer@email.com"

className="w-full bg-[#070708] border border-[#141416] text-xs rounded p-3 text-white focus:outline-none"

/>


</div>







<div>


<label className="text-[9px] text-gray-500 uppercase tracking-widest block mb-2">

Password

</label>



<input


type="password"

required

value={password}

onChange={(e)=>setPassword(e.target.value)}

placeholder="••••••••"

className="w-full bg-[#070708] border border-[#141416] text-xs rounded p-3 text-white focus:outline-none"

/>


</div>







<button


type="submit"

disabled={loading}

className="w-full bg-white hover:bg-gray-200 disabled:bg-gray-600 text-black text-xs font-bold uppercase tracking-widest py-3.5 rounded"


>


{

loading

?

"Verifying..."

:

"Sign In"

}



</button>








<div className="text-center mt-6">


<p className="text-xs text-gray-500">

New customer?

</p>




<button


type="button"

onClick={()=>navigate("/register")}

className="mt-2 text-white text-xs underline uppercase tracking-widest"


>

Create Account

</button>



</div>







</form>






</div>



</div>


</div>


);


}


export default Login;