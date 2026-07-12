import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useCart } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";


function ProductDetail() {


  const { id } = useParams();


  const [product,setProduct] = useState(null);

  const [loading,setLoading] = useState(true);

  const [quantity,setQuantity] = useState(1);



  const { addToCart } = useCart();

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();



  const storageBaseURL =
  "http://127.0.0.1:8000/storage/";





  useEffect(()=>{


    api.get("/products")

    .then((response)=>{


      if(response.data.status){


        const foundProduct =
        response.data.products.find(
          p => p.id === Number(id)
        );


        setProduct(foundProduct);


      }


      setLoading(false);


    })

    .catch((error)=>{


      console.log(error);

      setLoading(false);


    });



  },[id]);







const handleBuyNow = ()=>{


    addToCart(product, quantity);


    navigate("/checkout");


};







  if(loading){


    return (

      <div className="min-h-[70vh] flex items-center justify-center bg-[#070708] text-white">

        Loading...

      </div>

    );


  }







  if(!product){


    return (

      <div className="min-h-[70vh] bg-[#070708] flex flex-col items-center justify-center text-white">


        <p className="text-xs uppercase">

          Product Not Found

        </p>



        <Link

        to="/shop"

        className="mt-5 underline text-xs"

        >

        Back Shop

        </Link>


      </div>

    );


  }








return (


<div className="bg-[#070708] min-h-screen px-8 py-16 text-white">


<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">





<div className="bg-[#0D0D0F] border border-[#141416] rounded-xl overflow-hidden aspect-square">


<img


src={`${storageBaseURL}${product.image}`}

alt={product.name}

className="w-full h-full object-cover"


/>


</div>









<div className="flex flex-col justify-center">



<span className="text-[10px] text-gray-500 uppercase tracking-widest">

Category // {product.category}

</span>





<h1 className="text-3xl font-black uppercase mt-3 mb-4">

{product.name}

</h1>






<div className="text-xl font-bold mb-6">

LKR {parseFloat(product.price).toLocaleString()}

</div>







<p className="text-xs text-gray-400 border-t border-b border-[#141416] py-6 mb-8">


{product.description || "No description available"}


</p>








<div className="flex items-center gap-6 mb-8">



<div>


<p className="text-[9px] text-gray-500 uppercase mb-2">

Quantity

</p>



<div className="flex border rounded">


<button

onClick={()=>setQuantity(q=>Math.max(1,q-1))}

className="px-3"

>

-

</button>




<span className="px-4">

{quantity}

</span>




<button

onClick={()=>setQuantity(q=>Math.min(product.stock,q+1))}

className="px-3"

>

+

</button>



</div>


</div>







<div>


<p className="text-[9px] text-gray-500 uppercase mb-2">

Availability

</p>


<span className={

product.stock > 0

?

"text-emerald-500 text-xs"

:

"text-red-500 text-xs"

}>


{

product.stock > 0

?

`${product.stock} Available`

:

"Out Of Stock"

}


</span>


</div>




</div>









<button


onClick={()=>addToCart(product,quantity)}

disabled={product.stock <=0}


className="w-full bg-white text-black py-4 rounded text-xs font-bold uppercase tracking-widest mb-4"


>


{

product.stock > 0

?

"Add To Shopping Bag"

:

"Out Of Stock"

}


</button>









<button


onClick={handleBuyNow}

disabled={product.stock <=0}


className="w-full border border-white text-white py-4 rounded text-xs font-bold uppercase tracking-widest"


>


Buy It Now


</button>






</div>


</div>


</div>


);


}


export default ProductDetail;