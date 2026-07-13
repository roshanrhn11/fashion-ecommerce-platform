import { useState, useContext } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";


function Checkout() {


  const { cart, cartTotal, clearCart } = useCart();


  const { token } = useContext(AuthContext);


  const navigate = useNavigate();



  const [formData,setFormData] = useState({

    customer_name:"",
    email:"",
    phone:"",
    address:"",
    city:"",
    postal_code:""

  });



  const [loading,setLoading] = useState(false);

  const [success,setSuccess] = useState(false);

  const [orderRef,setOrderRef] = useState("");





  const handleChange=(e)=>{


    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });


  };






  const handleSubmit = async(e)=>{

  e.preventDefault();

  setLoading(true);


  try{


    const orderData = {

      customer_name: formData.customer_name,

      email: formData.email,

      phone: formData.phone,

      address:
      `${formData.address}, ${formData.city} ${formData.postal_code}`,

      items: cart,

      total: cartTotal,

      payment_method:"Cash on Delivery"

    };



    let config = {
      headers:{
        Accept:"application/json"
      }
    };



    // Send token only if user logged in
    if(token){

      config.headers.Authorization =
      `Bearer ${token}`;

    }



    const response = await api.post(
      "/orders",
      orderData,
      config
    );



    console.log(
      "ORDER RESPONSE:",
      response.data
    );



    if(response.data.status){


      clearCart();


      setOrderRef(
        response.data.reference
      );


      setSuccess(true);


    }



  }
  catch(error){


 console.log("ORDER ERROR FULL:", error);

    console.log(
        "SERVER RESPONSE:",
        error.response?.data
    );


    alert(
      error.response?.data?.message ||
      "Order failed"
    );


  }
  finally{

    setLoading(false);

  }


};





  if(success){


    return(


      <div className="min-h-screen bg-[#070708] text-white flex items-center justify-center">


        <div className="text-center">


          <div className="text-emerald-400 text-5xl mb-5">

            ✓

          </div>





          <h1 className="text-xl font-black uppercase tracking-widest">

            Order Confirmed

          </h1>





          <p className="text-gray-400 text-sm mt-4">

            Your Order Reference

          </p>





          <p className="text-white font-bold mt-2">

            {orderRef}

          </p>





          <p className="text-xs text-gray-500 mt-5">

            Cash on Delivery selected.
            Confirmation email will be sent.

          </p>





          <button

          onClick={()=>navigate("/")}

          className="mt-8 bg-white text-black px-6 py-3 rounded text-xs font-bold uppercase"

          >

            Continue Shopping

          </button>




        </div>


      </div>


    );


  }
    return(


<div className="bg-[#070708] min-h-screen px-8 py-12 text-white">


<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">





<div className="bg-[#0D0D0F] border border-[#141416] p-8 rounded-xl">


<h1 className="text-sm font-black uppercase tracking-widest mb-8">

Delivery Information

</h1>





<form 
onSubmit={handleSubmit}
className="space-y-5"
>





<input

name="customer_name"

required

placeholder="Full Name"

value={formData.customer_name}

onChange={handleChange}

className="w-full bg-black border border-[#141416] p-3 text-xs"

/>







<input

name="email"

type="email"

required

placeholder="Email"

value={formData.email}

onChange={handleChange}

className="w-full bg-black border border-[#141416] p-3 text-xs"

/>







<input

name="phone"

required

placeholder="Phone Number"

value={formData.phone}

onChange={handleChange}

className="w-full bg-black border border-[#141416] p-3 text-xs"

/>







<textarea

name="address"

required

placeholder="Delivery Address"

value={formData.address}

onChange={handleChange}

rows="4"

className="w-full bg-black border border-[#141416] p-3 text-xs"

/>







<input

name="city"

required

placeholder="City"

value={formData.city}

onChange={handleChange}

className="w-full bg-black border border-[#141416] p-3 text-xs"

/>







<input

name="postal_code"

placeholder="Postal Code"

value={formData.postal_code}

onChange={handleChange}

className="w-full bg-black border border-[#141416] p-3 text-xs"

/>








<div className="border border-[#141416] p-4">


<h2 className="text-xs font-bold uppercase">

Payment Method

</h2>



<p className="text-xs text-gray-400 mt-3">

✓ Cash On Delivery (COD)

</p>


</div>








<button

disabled={loading}

className="w-full bg-white text-black py-4 text-xs font-bold uppercase rounded"

>


{

loading

?

"Processing Order..."

:

"Confirm Placement"

}


</button>





</form>


</div>









<div className="bg-[#0D0D0F] border border-[#141416] p-8 rounded-xl h-fit">


<h2 className="text-sm font-black uppercase tracking-widest mb-6">

Order Summary

</h2>








{

cart.map(item=>(


<div

key={item.id}

className="flex justify-between text-xs mb-4"

>


<span>

{item.name} x {item.quantity}

</span>



<span>

LKR {(item.price * item.quantity).toLocaleString()}

</span>



</div>


))


}









<div className="border-t border-[#141416] pt-5 mt-5 flex justify-between">


<span className="font-bold uppercase text-xs">

Total

</span>



<span className="font-black">

LKR {cartTotal.toLocaleString()}

</span>



</div>





</div>






</div>


</div>


);


}


export default Checkout;