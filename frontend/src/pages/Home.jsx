import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  // 5 வினாடிக்கு ஒருமுறை மாறும் உயர்தர பிரீமியம் ஆடம்பரப் படங்கள் (High-End Unsplash Clothing Imagery)
  const sliderImages = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1600&q=80"
  ];

  // லோயர் கிரிட்க்கான பிரீமியம் படங்கள்
  const menImage = "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=600&q=80";
  const womenImage = "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80";
  const kidsImage = "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=600&q=80";

  const [currentSlide, setCurrentSlide] = useState(0);

  // 5 வினாடிக்கு ஒருமுறை தானாக ஸ்லைடர் மாறும் லாஜிக் (Every 5 Seconds Auto-Advance)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [sliderImages.length]);

  return (
    <div className="bg-[#070708] min-h-screen text-white font-sans antialiased overflow-x-hidden">
      
      {/* ================= HERO AUTO-SLIDING IMAGE BANNER ================= */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
        
        {/* Images Sliding Canvas Container */}
        {sliderImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-35 scale-100" : "opacity-0 scale-105"
            } transform duration-[1000ms]`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(7,7,8,0.3), rgba(7,7,8,0.95)), url(${slide})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
        ))}

        {/* Content Typography Engine */}
        <div className="text-center z-10 max-w-4xl px-4 flex flex-col items-center mt-12">
          <span className="text-xs font-semibold tracking-[0.5em] text-[#d4af37] uppercase block mb-6 animate-pulse">
            AESTHETIC ARCHIVE // FALL 2026
          </span>
          <h1 className="text-4xl md:text-7xl font-light tracking-tighter uppercase leading-none mb-8 text-white">
            ELEGANCE IN <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400">MINIMALISM</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-400 max-w-md mx-auto tracking-[0.25em] uppercase mb-12 opacity-80 leading-relaxed font-light">
            Premium fabrics. Industrial construction. Tailored for the modern vanguard.
          </p>
          
          {/* Animated Interactive Button */}
          <Link 
            to="/shop" 
            className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden border border-white/20 rounded-full tracking-widest text-xs uppercase text-white transition-all duration-300 hover:border-[#d4af37]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#d4af37] to-[#aa8422] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0"></span>
            <span className="relative z-10 flex items-center gap-2 group-hover:text-black font-semibold transition-colors duration-300">
              Explore Collection
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 transform group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Slide Indicator Dots (கீழே இருக்கும் ஸ்லைடர் புள்ளிகள்) */}
        <div className="absolute bottom-12 z-20 flex gap-3">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentSlide ? "w-8 bg-[#d4af37]" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= CURATED CATEGORIES NETWORK ================= */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] mb-2 block">Premium Curation</span>
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.2em] uppercase text-white">Curated Categories</h2>
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto mt-4"></div>
        </div>

        {/* 3-Column Luxury Aspect Grid with Smooth 3D Hover Upgrades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Category: MENSWEAR */}
          <Link 
            to="/shop?category=Men" 
            className="relative h-[480px] rounded-2xl overflow-hidden group border border-white/5 bg-[#111] block shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <img 
              src={menImage} 
              alt="Menswear" 
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-[0.8s] ease-out filter grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
            <div className="absolute bottom-8 left-8 z-20">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37] mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">Discover Capsule</span>
              <h3 className="text-lg font-light tracking-widest uppercase text-white">MENSWEAR</h3>
              <div className="w-8 h-[1px] bg-white mt-3 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </div>
          </Link>

          {/* Category: WOMENSWEAR */}
          <Link 
            to="/shop?category=Women" 
            className="relative h-[480px] rounded-2xl overflow-hidden group border border-white/5 bg-[#111] block shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <img 
              src={womenImage} 
              alt="Womenswear" 
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-[0.8s] ease-out filter grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
            <div className="absolute bottom-8 left-8 z-20">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37] mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">Discover Atelier</span>
              <h3 className="text-lg font-light tracking-widest uppercase text-white">WOMENSWEAR</h3>
              <div className="w-8 h-[1px] bg-white mt-3 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </div>
          </Link>

          {/* Category: KIDS ASSEMBLY */}
          <Link 
            to="/shop?category=Kids" 
            className="relative h-[480px] rounded-2xl overflow-hidden group border border-white/5 bg-[#111] block shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <img 
              src={kidsImage} 
              alt="Kids Assembly" 
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-[0.8s] ease-out filter grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
            <div className="absolute bottom-8 left-8 z-20">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37] mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">Discover Kids</span>
              <h3 className="text-lg font-light tracking-widest uppercase text-white">KIDS ASSEMBLY</h3>
              <div className="w-8 h-[1px] bg-white mt-3 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </div>
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;