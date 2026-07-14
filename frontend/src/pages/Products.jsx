import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All'; // Default 'All' shows section-wise view

  const { addToCart } = useCart();
  const storageBaseURL = "http://127.0.0.1:8000/storage/";

  // ஆடம்பர 3D ஆடைகளுக்கான இன்டர்நெட் இமேஜ் மேப்பிங்
  const premiumFallbackImages = {
    Men: [
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=600&auto=format&fit=crop'
    ],
    Women: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop'
    ],
    Kids: [
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=600&auto=format&fit=crop'
    ],
    Default: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop'
    ]
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products')
      .then(res => res.json())
      .then(data => {
        if (data.status && data.products) {
          setProducts(data.products);
        } else if (Array.isArray(data)) {
          setProducts(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Laravel Database API offline, standardizing fallback mockup.");
        setProducts([
          { id: 1, name: 'Kids Cartoon T-Shirt', price: 1800, category: 'Kids', description: 'Soft cotton t-shirt with cartoon design.', stock: 12, image: '' },
          { id: 2, name: 'Classic Black T-Shirt', price: 2500, category: 'Men', description: 'Premium cotton black t-shirt with comfortable fit.', stock: 8, image: '' },
          { id: 3, name: 'White Oversized T-Shirt', price: 3000, category: 'Men', description: 'Modern oversized white t-shirt for casual style.', stock: 5, image: '' },
          { id: 4, name: 'Blue Denim Shirt', price: 5500, category: 'Men', description: 'Stylish blue denim shirt for daily wear.', stock: 3, image: '' },
          { id: 5, name: 'Satin Noir Luxury Gown', price: 8900, category: 'Women', description: 'Atelier evening luxury drape gown.', stock: 4, image: '' },
          { id: 6, name: 'Silk Floral Summer Dress', price: 6500, category: 'Women', description: 'Lightweight premium silk dress.', stock: 7, image: '' },
          { id: 7, name: 'Linen Casual Women Top', price: 3400, category: 'Women', description: 'Minimalist white linen luxury top.', stock: 9, image: '' }
        ]);
        setLoading(false);
      });
  }, []);

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  // கார்டு ரெண்டரிங் செய்ய உதவும் ஒரு பொதுவான பங்க்ஷன்
  const renderProductCard = (product, idx) => {
    const categoryGroup = product.category || 'Default';
    const fallbackPool = premiumFallbackImages[categoryGroup] || premiumFallbackImages.Default;
    const finalProductImage = product.image && product.image.trim() !== ''
      ? (product.image.startsWith('http') ? product.image : `${storageBaseURL}${product.image}`)
      : fallbackPool[idx % fallbackPool.length];

    return (
      <div key={product.id} className="group relative flex flex-col bg-[#0b0b0c] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
        <Link to={`/product/${product.id}`} className="relative h-[340px] w-full overflow-hidden block bg-[#141416]">
          <img 
            src={finalProductImage} 
            alt={product.name}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-[0.9s] ease-out filter brightness-90 group-hover:brightness-100"
          />
          <span className="absolute top-4 left-4 bg-black/60 border border-white/10 text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-md backdrop-blur-md">
            {product.category}
          </span>
        </Link>
        <div className="p-5 flex flex-col flex-grow justify-between bg-gradient-to-b from-[#0b0b0c] to-[#080809]">
          <div className="mb-4">
            <Link to={`/product/${product.id}`}>
              <h3 className="text-sm font-medium tracking-wide text-white uppercase line-clamp-1 group-hover:text-[#d4af37] transition-colors">
                {product.name}
              </h3>
            </Link>
            <p className="text-[11px] text-gray-400 mt-1.5 line-clamp-1 leading-relaxed font-light">
              {product.description || "No description available"}
            </p>
            <div className="flex justify-between items-baseline mt-3">
              <span className="text-[9px] text-gray-500 uppercase">Price</span>
              <span className="text-xs font-bold text-white">LKR {parseFloat(product.price).toLocaleString()}</span>
            </div>
          </div>
          <button
            onClick={() => addToCart(product, 1)}
            disabled={product.stock <= 0}
            className="w-full py-2.5 rounded-xl text-[10px] uppercase tracking-widest font-semibold bg-white text-black hover:bg-[#d4af37] transition-all duration-300"
          >
            {product.stock <= 0 ? 'Out of Stock' : 'Add Bag'}
          </button>
        </div>
      </div>
    );
  };

  // சர்ச் பில்டரிங் லாஜிக்
  const searchedProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  // கேட்டகிரி வாரியாக பிரித்தல்
  const womenProducts = searchedProducts.filter(p => p.category.toLowerCase() === 'women');
  const menProducts = searchedProducts.filter(p => p.category.toLowerCase() === 'men');
  const kidsProducts = searchedProducts.filter(p => p.category.toLowerCase() === 'kids');

  return (
    <div className="bg-[#070708] text-[#f5f5f7] min-h-screen py-24 px-4 sm:px-8 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-8 mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-light tracking-[0.15em] text-white uppercase">STUDIO CATALOG</h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-2">Precision tailored artifacts built to endure.</p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Search archive..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-64 bg-[#111113] border border-white/5 rounded-full px-5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>
        </div>

        {/* ================= CATEGORY FILTERS (All Series Added Back) ================= */}
        <div className="flex flex-wrap gap-2.5 mb-16 justify-center md:justify-start">
          {['All', 'Men', 'Women', 'Kids'].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all duration-300 border ${
                (cat === 'All' && activeCategory === 'All') || activeCategory.toLowerCase() === cat.toLowerCase()
                  ? 'bg-white text-black border-white font-semibold' 
                  : 'bg-transparent text-gray-400 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat === 'All' ? 'All Series Collection' : `${cat}'s Showcase`}
            </button>
          ))}
        </div>

        {/* ================= LOADING CANVAS STATE ================= */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-40 gap-3">
            <div className="w-6 h-6 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">Aligning Grid...</p>
          </div>
        ) : (
          <div className="space-y-20">
            
            {/* VIEW 1: SECTION-WISE VIEW (If 'All' is selected) */}
            {activeCategory === 'All' && (
              <>
                {/* 1. WOMEN COLLECTION SECTION */}
                {womenProducts.length > 0 && (
                  <div>
                    <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-3">
                      <h2 className="text-lg font-light tracking-widest uppercase text-[#d4af37]">Women Luxury Atelier</h2>
                      <button onClick={() => handleCategoryChange('Women')} className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                        Slide / View Series <span>→</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {womenProducts.slice(0, 4).map((product, idx) => renderProductCard(product, idx))}
                    </div>
                  </div>
                )}

                {/* 2. MEN COLLECTION SECTION */}
                {menProducts.length > 0 && (
                  <div>
                    <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-3">
                      <h2 className="text-lg font-light tracking-widest uppercase text-[#d4af37]">Men Premium Capsule</h2>
                      <button onClick={() => handleCategoryChange('Men')} className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                        Slide / View Series <span>→</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {menProducts.slice(0, 4).map((product, idx) => renderProductCard(product, idx))}
                    </div>
                  </div>
                )}

                {/* 3. KIDS COLLECTION SECTION */}
                {kidsProducts.length > 0 && (
                  <div>
                    <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-3">
                      <h2 className="text-lg font-light tracking-widest uppercase text-[#d4af37]">Kids Contemporary Assembly</h2>
                      <button onClick={() => handleCategoryChange('Kids')} className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                        Slide / View Series <span>→</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {kidsProducts.slice(0, 4).map((product, idx) => renderProductCard(product, idx))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* VIEW 2: INDIVIDUAL FULL GRID VIEW (If Men, Women, or Kids is single-clicked) */}
            {activeCategory !== 'All' && (
              <div>
                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-3">
                  <h2 className="text-lg font-light tracking-widest uppercase text-white">{activeCategory}'s Full Series</h2>
                  <button onClick={() => handleCategoryChange('All')} className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                    ← Back to Archive
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                  {searchedProducts
                    .filter(p => p.category.toLowerCase() === activeCategory.toLowerCase())
                    .map((product, idx) => renderProductCard(product, idx))}
                </div>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
};

export default Products;