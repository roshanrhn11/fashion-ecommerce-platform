import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";


function AdminDashboard() {


  const navigate = useNavigate();


  const [activeTab, setActiveTab] = useState("add-product");


  const [name, setName] = useState("");
  const [category, setCategory] = useState("Men");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);


  const [products, setProducts] = useState([]);


  const [loading, setLoading] = useState(false);

  const [msg, setMsg] = useState("");


  const [editId, setEditId] = useState(null);





  useEffect(()=>{

    loadProducts();

  },[]);







  const loadProducts = async()=>{


    try{


      const response = await api.get("/products");


      if(response.data.status){

        setProducts(response.data.products);

      }


    }
    catch(error){

      console.log(error);

    }


  };








  const clearForm = ()=>{


    setName("");

    setCategory("Men");

    setPrice("");

    setStock("");

    setDescription("");

    setImage(null);

    setEditId(null);


  };








  const handleProductSubmit = async(e)=>{


    e.preventDefault();


    setLoading(true);

    setMsg("");



    const formData = new FormData();


    formData.append("name",name);

    formData.append("category",category);

    formData.append("price",price);

    formData.append("stock",stock);

    formData.append("description",description);



    if(image){

      formData.append("image",image);

    }





    try{


      await api.post(

        "/products/store",

        formData,

        {

          headers:{

            "Content-Type":"multipart/form-data"

          }

        }

      );




      setMsg("Product created successfully");


      clearForm();


      loadProducts();



    }
    catch(error){


      console.log(error);


      setMsg(

        error.response?.data?.message ||

        "Product upload failed"

      );


    }
    finally{


      setLoading(false);


    }


  };









  const handleUpdate = async()=>{


    setLoading(true);



    const formData = new FormData();


    formData.append("name",name);

    formData.append("category",category);

    formData.append("price",price);

    formData.append("stock",stock);

    formData.append("description",description);



    if(image){

      formData.append("image",image);

    }




    try{


      await api.post(

        `/products/${editId}/update?_method=PUT`,

        formData,

        {

          headers:{

            "Content-Type":"multipart/form-data"

          }

        }

      );



      setMsg("Product updated successfully");


      clearForm();


      loadProducts();



    }
    catch(error){


      console.log(error);

      setMsg("Product update failed");


    }
    finally{


      setLoading(false);


    }


  };









  const handleDelete = async(id)=>{


    const confirmDelete =
    window.confirm(
      "Are you sure you want to delete this product?"
    );



    if(!confirmDelete){

      return;

    }





    try{


      await api.delete(

        `/products/${id}/delete`

      );



      setMsg("Product deleted successfully");


      loadProducts();



    }
    catch(error){


      console.log(error);

      setMsg("Delete failed");


    }


  };








  const handleLogout = ()=>{


    localStorage.removeItem(
      "lara_admin_token"
    );


    localStorage.removeItem(
      "lara_admin_info"
    );


    navigate("/admin");


  };

  return (

    <div className="bg-[#070708] min-h-screen text-white px-8 py-12">


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">





        {/* Sidebar */}

        <div className="space-y-2 bg-[#0D0D0F] border border-[#141416] p-4 rounded-xl h-fit">


          <div className="text-[10px] font-black tracking-widest text-gray-500 uppercase p-2 mb-2">

            CONTROL PANEL

          </div>





          <button

            onClick={()=>setActiveTab("add-product")}

            className={`w-full text-left text-xs font-bold uppercase tracking-wider p-3 rounded ${
              
              activeTab==="add-product"

              ?

              "bg-white text-black"

              :

              "text-gray-400 hover:text-white"

            }`}

          >

            {

            editId

            ?

            "Edit Product"

            :

            "Add New Product"

            }


          </button>









          <button

            onClick={()=>setActiveTab("inventory")}

            className={`w-full text-left text-xs font-bold uppercase tracking-wider p-3 rounded ${
              
              activeTab==="inventory"

              ?

              "bg-white text-black"

              :

              "text-gray-400 hover:text-white"

            }`}

          >

            Inventory ({products.length})

          </button>









          <div className="pt-4 mt-4 border-t border-[#141416]">



            <button

              onClick={()=>navigate("/")}

              className="w-full text-left text-xs font-bold uppercase tracking-wider p-3 text-gray-300 hover:text-white"

            >

              Go Website

            </button>







            <button

              onClick={handleLogout}

              className="w-full text-left text-xs font-bold uppercase tracking-wider p-3 text-rose-500 hover:bg-rose-950/20"

            >

              Logout

            </button>



          </div>



        </div>









        {/* Main Workspace */}


        <div className="md:col-span-3 bg-[#0D0D0F] border border-[#141416] p-8 rounded-xl">





          {

          msg && (


          <div className="mb-6 p-3 bg-zinc-900 border border-zinc-800 text-gray-300 text-xs font-bold rounded">

            {msg}

          </div>


          )

          }









          {

          activeTab==="add-product" && (



          <div>


            <h2 className="text-sm font-black uppercase tracking-widest mb-6 border-b border-[#141416] pb-3">


              {

              editId

              ?

              "Edit Product"

              :

              "Add New Product"

              }


            </h2>









            <form


            onSubmit={

              editId

              ?

              (e)=>{

                e.preventDefault();

                handleUpdate();

              }

              :

              handleProductSubmit

            }


            className="space-y-5"


            >







            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">



              <div>


                <label className="text-[9px] text-gray-500 uppercase block mb-2">

                  Product Name

                </label>



                <input

                required

                value={name}

                onChange={(e)=>setName(e.target.value)}

                className="w-full bg-black border border-[#141416] rounded p-3 text-xs"

                />


              </div>









              <div>


                <label className="text-[9px] text-gray-500 uppercase block mb-2">

                  Category

                </label>




                <select

                value={category}

                onChange={(e)=>setCategory(e.target.value)}

                className="w-full bg-black border border-[#141416] rounded p-3 text-xs"

                >


                  <option>Men</option>

                  <option>Women</option>

                  <option>Kids</option>


                </select>



              </div>



            </div>









            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">


              <div>


                <label className="text-[9px] text-gray-500 uppercase block mb-2">

                Price

                </label>


                <input

                type="number"

                required

                value={price}

                onChange={(e)=>setPrice(e.target.value)}

                className="w-full bg-black border border-[#141416] rounded p-3 text-xs"

                />


              </div>







              <div>


                <label className="text-[9px] text-gray-500 uppercase block mb-2">

                Stock

                </label>


                <input

                type="number"

                required

                value={stock}

                onChange={(e)=>setStock(e.target.value)}

                className="w-full bg-black border border-[#141416] rounded p-3 text-xs"

                />


              </div>



            </div>





            <div>


              <label className="text-[9px] text-gray-500 uppercase block mb-2">

                Description

              </label>



              <textarea

              rows="4"

              value={description}

              onChange={(e)=>setDescription(e.target.value)}

              className="w-full bg-black border border-[#141416] rounded p-3 text-xs"

              />


            </div>









            <div>


              <label className="text-[9px] text-gray-500 uppercase block mb-2">

                Product Image

              </label>



              <input

              type="file"

              onChange={(e)=>setImage(e.target.files[0])}

              className="w-full bg-black border border-[#141416] rounded p-3 text-xs"

              />


            </div>









            <button

            disabled={loading}

            className="w-full bg-white text-black py-3 text-xs font-bold uppercase rounded"

            >


            {

            loading

            ?

            "Processing..."

            :

            editId

            ?

            "Update Product"

            :

            "Create Product"


            }


            </button>





            {

            editId && (


            <button

            type="button"

            onClick={clearForm}

            className="w-full border border-gray-700 py-3 text-xs uppercase rounded"

            >

              Cancel Edit

            </button>


            )

            }



            </form>


          </div>



          )

          }












          {

          activeTab==="inventory" && (



          <div>


            <h2 className="text-sm font-black uppercase tracking-widest mb-6 border-b border-[#141416] pb-3">

              Product Inventory

            </h2>







            <div className="space-y-3">


            {


            products.length===0


            ?


            <p className="text-gray-500 text-xs">

              No products found.

            </p>


            :



            products.map((product)=>(



            <div

            key={product.id}

            className="bg-[#070708] border border-[#141416] p-4 rounded-lg flex justify-between items-center"


            >




              <div>


                <h3 className="text-xs font-bold uppercase">

                  {product.name}

                </h3>



                <p className="text-[10px] text-gray-500 uppercase mt-1">

                  {product.category}

                  {" | "}

                  Stock: {product.stock}

                </p>



              </div>








              <div className="text-right">


                <div className="text-xs font-bold mb-3">

                  LKR {Number(product.price).toLocaleString()}

                </div>







                <div className="flex gap-2">


                  <button


                  onClick={()=>{


                    setEditId(product.id);


                    setName(product.name);


                    setCategory(product.category);


                    setPrice(product.price);


                    setStock(product.stock);


                    setDescription(product.description || "");


                    setImage(null);



                    setActiveTab("add-product");


                  }}



                  className="bg-white text-black px-3 py-2 text-[10px] font-bold uppercase rounded"

                  >

                    Edit

                  </button>









                  <button


                  onClick={()=>handleDelete(product.id)}



                  className="bg-red-600 text-white px-3 py-2 text-[10px] font-bold uppercase rounded"

                  >

                    Delete

                  </button>



                </div>


              </div>







            </div>


            ))



            }


            </div>



          </div>



          )

          }




        </div>





      </div>



    </div>


  );


}



export default AdminDashboard;