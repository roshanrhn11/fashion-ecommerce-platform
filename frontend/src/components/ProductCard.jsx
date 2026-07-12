function ProductCard({ product }) {
  // Base URL for Laravel storage link access
  const storageBaseURL = "http://127.0.0.1:8000/storage/";

  return (
    <div className="group relative bg-[#121212] border border-[#1A1A1A] rounded-xl overflow-hidden hover:border-[#2D2D2D] transition-all duration-300 flex flex-col h-full">
      {/* Product Image Wrapper */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#1A1A1A]">
        {product.image ? (
          <img
            src={`${storageBaseURL}${product.image}`}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.parentNode.innerHTML = '<div className="w-full h-full flex items-center justify-center text-xs text-gray-600">Image Asset Mismatch</div>';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-gray-500 uppercase tracking-widest">
            No Image
          </div>
        )}
        
        {/* Floating Category Tag */}
        <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-[10px] font-semibold text-gray-300 px-2 py-1 rounded tracking-wider uppercase">
          {product.category}
        </span>
      </div>

      {/* Meta Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-medium text-white group-hover:text-gray-300 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-gray-500 line-clamp-2 flex-grow">
          {product.description || "Premium clothing edition artifact."}
        </p>
        
        {/* Bottom Actions Row */}
        <div className="mt-4 pt-3 border-t border-[#1F1F1F] flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500 block">Price</span>
            <span className="text-sm font-bold text-white">LKR {parseFloat(product.price).toLocaleString()}</span>
          </div>
          <button className="bg-white hover:bg-gray-200 text-black text-xs font-semibold px-3 py-2 rounded transition flex items-center gap-1.5">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;