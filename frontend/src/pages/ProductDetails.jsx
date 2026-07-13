import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useCart } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const storageBaseURL = "http://127.0.0.1:8000/storage/";

  // உயர்தர 3D ஸ்டைல் இமேஜ் பிளேஸ்ஹோல்டர்கள் (Category wise fallback metrics)
  const categoryFallbacks = {
    Men: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop",
    Women: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
    Kids: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop",
    Default: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
  };

  useEffect(() => {
    api.get("/products")
      .then((response) => {
        if (response.data.status) {
          const foundProduct = response.data.products.find(
            p => p.id === Number(id)
          );
          setProduct(foundProduct);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("Axios API mapping offline, loading local StyleCart fallback configuration.");
        
        // அட்மின் பேனல் சோதனைகளுக்காக 100% துல்லியமான லோக்கல் டேட்டா மாடல்
        const demoProducts = [
          { id: 1, name: 'Obsidian Oversized Tee', price: 1800, category: 'Kids', description: 'Soft cotton t-shirt with cartoon design.', stock: 12, image: '' },
          { id: 2, name: 'Classic Noir Tailored Shirt', price: 2500, category: 'Men', description: 'Premium cotton black t-shirt with comfortable fit.', stock: 8, image: '' },
          { id: 3, name: 'White Minimalist Oversized Tee', price: 3000, category: 'Men', description: 'Modern oversized white t-shirt for casual style.', stock: 5, image: '' },
          { id: 4, name: 'Premium Indigo Denim Jacket', price: 5500, category: 'Men', description: 'Stylish blue denim shirt for daily wear.', stock: 3, image: '' }
        ];
        
        const found = demoProducts.find(p => p.id === Number(id));
        setProduct(found || null);
        setLoading(false);
      });
  }, [id]);

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/checkout");
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#070708] text-white gap-3">
        <div className="w-6 h-6 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Retrieving Artifact...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[70vh] bg-[#070708] flex flex-col items-center justify-center text-white px-4">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">Product Not Found</p>
        <Link
          to="/shop"
          className="group relative inline-flex items-center justify-center px-6 py-3 border border-white/20 rounded-full tracking-widest text-[10px] uppercase text-white transition-all duration-300 hover:border-[#d4af37]"
        >
          <span className="relative z-10">Return to Catalog</span>
        </Link>
      </div>
    );
  }

  // லாராவெல் இமேஜ் மற்றும் ஃபால்பேக் படங்களைச் சரியாக கையாளுதல்
  const finalImageUrl = product.image && product.image.trim() !== ''
    ? (product.image.startsWith('http') ? product.image : `${storageBaseURL}${product.image}`)
    : (categoryFallbacks[product.category] || categoryFallbacks.Default);

  return (
    <div className="bg-[#070708] min-h-screen px-4 sm:px-8 py-24 text-white antialiased font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* ================= 3D INTERACTIVE IMAGE INTERFACE ================= */}
        <div className="bg-[#111113] border border-white/5 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl relative group">
          <img
            src={finalImageUrl}
            alt={product.name}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-[1.2s] ease-out filter brightness-95 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-100 pointer-events-none"></div>
        </div>

        {/* ================= PRODUCT SPECIFICATIONS PANEL ================= */}
        <div className="flex flex-col pt-4">
          <span className="text-[10px] text-[#d4af37] uppercase tracking-[0.4em] font-semibold">
            StyleCart // {product.category} Capsule
          </span>

          <h1 className="text-3xl md:text-4xl font-light tracking-tight uppercase mt-4 mb-4 text-white leading-tight">
            {product.name}
          </h1>

          <div className="text-xl md:text-2xl font-semibold text-gray-200 mb-8 tracking-wide">
            LKR {parseFloat(product.price).toLocaleString()}
          </div>

          <div className="border-t border-b border-white/10 py-6 mb-8">
            <span className="text-[9px] text-gray-500 uppercase tracking-widest block mb-2">Description</span>
            <p className="text-xs text-gray-400 leading-relaxed tracking-wide font-light">
              {product.description || "Meticulously woven garment showcasing signature design architecture and industrial-grade stitching built to last."}
            </p>
          </div>

          {/* Quantity & Stock Grid Controller */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            
            {/* Quantity Selector */}
            <div>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-3">Quantity</p>
              <div className="flex items-center justify-between border border-white/10 rounded-xl bg-[#111113] w-32 px-2 py-1.5">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-3 py-1 text-gray-400 hover:text-white transition-colors font-medium text-sm"
                  disabled={product.stock <= 0}
                >
                  -
                </button>
                <span className="font-semibold text-xs text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                  className="px-3 py-1 text-gray-400 hover:text-white transition-colors font-medium text-sm"
                  disabled={product.stock <= 0}
                >
                  +
                </button>
              </div>
            </div>

            {/* Availability Stock Counter */}
            <div>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-3">Availability</p>
              <div className="pt-2">
                <span className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full ${
                  product.stock > 0
                    ? "bg-emerald-950/50 border border-emerald-500/30 text-emerald-400"
                    : "bg-red-950/50 border border-red-500/30 text-red-400"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${product.stock > 0 ? "bg-emerald-400" : "bg-red-400"} animate-pulse`}></span>
                  {product.stock > 0 ? `${product.stock} Units In Vault` : "Out Of Stock"}
                </span>
              </div>
            </div>

          </div>

          {/* ================= INTERACTIVE CALL TO ACTIONS ================= */}
          <div className="flex flex-col gap-4">
            
            {/* Add to Bag Button */}
            <button
              onClick={() => addToCart(product, quantity)}
              disabled={product.stock <= 0}
              className={`w-full py-4 rounded-xl text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                product.stock <= 0
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-white text-black hover:bg-[#d4af37] hover:text-black hover:shadow-lg hover:shadow-[#d4af37]/10 active:scale-[0.99]"
              }`}
            >
              {product.stock > 0 ? "Add To Shopping Bag" : "Out Of Stock"}
            </button>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              disabled={product.stock <= 0}
              className={`w-full bg-transparent border py-4 rounded-xl text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                product.stock <= 0
                  ? "border-gray-800 text-gray-500 cursor-not-allowed hidden"
                  : "border-white/30 text-white hover:border-white hover:bg-white/5 active:scale-[0.99]"
              }`}
            >
              Buy It Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;