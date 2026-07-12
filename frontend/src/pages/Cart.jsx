import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function Cart() {


  const { cart, removeFromCart, cartTotal, clearCart } = useCart();


  const { user } = useContext(AuthContext);


  const navigate = useNavigate();


  const storageBaseURL = "http://127.0.0.1:8000/storage/";



  const handleCheckout = () => {


    if(user){


      navigate("/checkout");


    }
    else{


      navigate("/login");


    }


  };





  return (

    <div className="bg-[#070708] min-h-screen px-8 py-12 text-white">


      <div className="max-w-5xl mx-auto">



        <h1 className="text-2xl font-black tracking-widest uppercase mb-10 border-b border-[#141416] pb-4">

          Your Bag ({cart.length})

        </h1>





        {
          cart.length > 0 ? (


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">



              {/* CART ITEMS */}

              <div className="lg:col-span-2 space-y-4">


                {
                  cart.map((item)=>(


                    <div

                      key={item.id}

                      className="flex gap-4 p-4 bg-[#0D0D0F] border border-[#141416] rounded-xl items-center justify-between"

                    >



                      <div className="flex items-center gap-4">



                        <div className="w-16 h-16 bg-[#111113] rounded-lg overflow-hidden">


                          <img

                            src={`${storageBaseURL}${item.image}`}

                            alt={item.name}

                            className="w-full h-full object-cover"

                          />


                        </div>




                        <div>


                          <h3 className="text-xs font-bold uppercase tracking-wider text-white">

                            {item.name}

                          </h3>



                          <span className="text-[10px] text-gray-500 block mt-1">

                            Qty: {item.quantity}

                          </span>



                          <span className="text-xs font-bold text-gray-400 block mt-1">

                            LKR {(item.price * item.quantity).toLocaleString()}

                          </span>



                        </div>


                      </div>





                      <button


                        onClick={()=>removeFromCart(item.id)}

                        className="text-xs text-rose-500 hover:text-rose-400 uppercase font-bold tracking-widest"


                      >

                        Remove


                      </button>




                    </div>



                  ))

                }






                <button


                  onClick={clearCart}

                  className="text-[10px] text-gray-500 hover:text-white uppercase font-bold tracking-widest mt-3 block ml-auto"


                >

                  Clear Entire Bag


                </button>





              </div>









              {/* ORDER SUMMARY */}


              <div className="bg-[#0D0D0F] border border-[#141416] p-6 rounded-xl">


                <h2 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">

                  Order Summary

                </h2>





                <div className="space-y-4 border-b border-[#141416] pb-4 mb-4 text-xs text-gray-400">



                  <div className="flex justify-between">


                    <span>

                      Subtotal

                    </span>



                    <span className="text-white">


                      LKR {cartTotal.toLocaleString()}


                    </span>



                  </div>






                  <div className="flex justify-between">


                    <span>

                      Shipping

                    </span>



                    <span className="text-gray-500">


                      Confirm later


                    </span>


                  </div>




                </div>








                <div className="flex justify-between items-center mb-8">


                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">

                    Total

                  </span>



                  <span className="text-lg font-black text-white">

                    LKR {cartTotal.toLocaleString()}

                  </span>



                </div>







                <button


                  onClick={handleCheckout}


                  className="w-full bg-white hover:bg-gray-200 text-black text-xs font-bold uppercase tracking-widest py-4 rounded transition"


                >


                  Proceed To Checkout


                </button>






                {
                  !user && (


                    <p className="text-[10px] text-gray-500 text-center mt-4 uppercase tracking-widest">


                      Login required for order


                    </p>


                  )

                }





              </div>





            </div>



          )



          :


          (


            <div className="border border-dashed border-[#141416] rounded-xl py-20 text-center">



              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">


                Your shopping bag is empty


              </p>





              <Link


                to="/shop"


                className="mt-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded inline-block"


              >

                Explore Collection


              </Link>





            </div>


          )


        }




      </div>


    </div>


  );


}


export default Cart;