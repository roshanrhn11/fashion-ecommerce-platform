import { useEffect, useState, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";


function MyOrders() {


  const { token } = useContext(AuthContext);


  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);



  const fetchOrders = async()=>{


    try{


      const response = await api.get("/my-orders",
      {
        headers:{
          Authorization:`Bearer ${token}`,
          Accept:"application/json"
        }
      });


      if(response.data.status){

        setOrders(response.data.orders);

      }


    }
    catch(error){

      console.log(
        "MY ORDERS ERROR:",
        error.response?.data
      );

    }
    finally{

      setLoading(false);

    }


  };





  useEffect(()=>{


    if(token){

      fetchOrders();

    }
    else{

      setLoading(false);

    }


  },[token]);







  const cancelOrder = async(id)=>{


    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );


    if(!confirmCancel) return;



    try{


      const response = await api.post(

        `/orders/${id}/cancel`,

        {},

        {
          headers:{
            Authorization:`Bearer ${token}`,
            Accept:"application/json"
          }
        }

      );



      if(response.data.status){

        alert("Order cancelled successfully");

        fetchOrders();

      }


    }
    catch(error){


      alert(
        error.response?.data?.message ||
        "Unable to cancel order"
      );


    }


  };







  if(loading){


    return(

      <div className="min-h-[70vh] bg-[#070708] flex items-center justify-center text-white">

        Loading Orders...

      </div>

    );

  }







  if(!token){


    return(

      <div className="min-h-[70vh] bg-[#070708] flex items-center justify-center text-white">

        Please login to view your orders.

      </div>

    );

  }






  return(


<div className="bg-[#070708] min-h-screen px-8 py-12 text-white">


<div className="max-w-5xl mx-auto">



<h1 className="text-xl font-black uppercase tracking-widest mb-8">

My Orders

</h1>







{

orders.length === 0 ?


(

<div className="border border-[#141416] rounded-xl p-10 text-center text-gray-500 text-xs uppercase">

No orders found

</div>

)


:


(

<div className="space-y-5">


{


orders.map((order)=>(


<div

key={order.id}

className="bg-[#0D0D0F] border border-[#141416] rounded-xl p-6"

>



<div className="flex justify-between items-start mb-4">


<div>


<p className="text-xs text-gray-500 uppercase">

Order Reference

</p>


<p className="font-bold">

ORD-{String(order.id).padStart(6,"0")}

</p>


</div>





<span className="text-xs uppercase text-yellow-400">

{order.status}

</span>



</div>








<p className="text-xs text-gray-400">

Address:

<span className="text-white ml-2">

{order.address}

</span>

</p>






<p className="mt-3 text-sm font-bold">

Total:

<span className="ml-2">

LKR {Number(order.total).toLocaleString()}

</span>

</p>







{/* CANCEL BUTTON */}

{

(order.status === "Pending" || order.status === "Confirmed") &&

(

<button

onClick={()=>cancelOrder(order.id)}

className="mt-5 bg-red-600 hover:bg-red-700 px-5 py-2 rounded text-xs font-bold uppercase"

>

Cancel Order

</button>

)

}








{/* PACKED MESSAGE */}

{

order.status === "Packed" &&

(

<p className="mt-5 text-emerald-400 text-xs uppercase font-bold">

✓ Your parcel is packed and will arrive soon

</p>

)

}







{/* SHIPPING MESSAGE */}

{

order.status === "Shipping" &&

(

<p className="mt-5 text-blue-400 text-xs uppercase font-bold">

🚚 Your parcel is on the way

</p>

)

}








{/* DELIVERED MESSAGE */}

{

order.status === "Delivered" &&

(

<p className="mt-5 text-green-400 text-xs uppercase font-bold">

✓ Order Delivered Successfully

</p>

)

}







</div>


))

}



</div>

)

}



</div>


</div>


  );


}


export default MyOrders;