import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import { useCart } from "../context/CartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const storageBaseURL = "http://127.0.0.1:8000/storage/";

  useEffect(() => {
    api.get("/products")
      .then((response) => {
        if (response.data.status) {
          setProducts(response.data.products);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070708] flex flex-col items-center justify-center gap-3">
        <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Synchronizing Stock...</span>
      </div>
    );
  }

  return (
    <div className="bg-[#070708] min-h-screen px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Metadata */}
        <div className="border-b border-[#141416] pb-6 mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black tracking-widest uppercase text-white">Studio Catalog</h1>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Precision tailored artifacts built to endure.</p>
          </div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400 bg-[#111113] px-4 py-2 rounded border border-[#1E1E21]">
            Active Vault: <span className="text-white font-black ml-1">{products.length} Items</span>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-[#0D0D0F] border border-[#141416] rounded-xl overflow-hidden hover:border-[#27272A] transition-all duration-300 flex flex-col h-full">
                
                {/* Image Frame */}
                <Link to={`/product/${product.id}`} className="relative aspect-square w-full overflow-hidden bg-[#111113] block">
                  {product.image ? (
                    <img
                      src={`${storageBaseURL}${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                      Asset Missing
                    </div>
                  )}
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-[9px] font-black text-gray-300 px-2.5 py-1 rounded tracking-widest uppercase border border-[#1E1E21]">
                    {product.category}
                  </span>
                </Link>

                {/* Details Meta Block */}
                <div className="p-5 flex flex-col flex-grow">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-xs font-bold tracking-widest text-white group-hover:text-gray-300 uppercase transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="mt-2 text-xs text-gray-500 font-medium line-clamp-2 flex-grow leading-relaxed">
                    {product.description || "Premium studio essential collection fabric assembly."}
                  </p>
                  
                  {/* Footer Core Row */}
                  <div className="mt-5 pt-4 border-t border-[#141416] flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-gray-500 uppercase tracking-widest block font-bold">Price</span>
                      <span className="text-xs font-black text-white tracking-wide">LKR {parseFloat(product.price).toLocaleString()}</span>
                    </div>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-white hover:bg-gray-200 text-black text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 rounded transition-colors active:scale-95"
                    >
                      Add Bag
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-[#141416] rounded-xl py-24 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">No Catalog Blueprints Live</p>
            <span className="text-[10px] text-gray-600 mt-2 block">Upload structures via the backend admin panel interface.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;