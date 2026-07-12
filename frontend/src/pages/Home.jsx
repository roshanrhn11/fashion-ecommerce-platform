import { Link } from "react-router-dom";

function Home() {
  const heroImage = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80";
  const menImage = "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=600&q=80";
  const womenImage = "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80";
  const kidsImage = "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="bg-[#070708] min-h-screen text-white">
      {/* Cinematic Cover Backdrop Banner */}
      <section 
        className="relative h-[85vh] flex items-center justify-center bg-cover bg-center px-6 border-b border-[#141416]"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(7,7,8,0.5), rgba(7,7,8,0.95)), url(${heroImage})` }}
      >
        <div className="text-center z-10 max-w-3xl">
          <span className="text-xs font-bold tracking-[0.5em] text-gray-400 uppercase block mb-4">
            AESTHETIC ARCHIVE // FALL 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
            ELEGANCE IN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">MINIMALISM</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-400 max-w-md mx-auto tracking-widest uppercase mb-10 opacity-80 leading-relaxed">
            Premium fabrics. Industrial construction. Tailored for the modern vanguard.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-white text-black text-xs font-black uppercase tracking-widest px-10 py-4 rounded hover:bg-gray-200 transition-all duration-300 active:scale-95 shadow-xl shadow-white/5"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Curated Categories Network */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold tracking-[0.3em] uppercase text-white">Curated Categories</h2>
          <div className="h-[1px] w-16 bg-gray-800 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link 
            to="/shop" 
            className="relative h-[450px] rounded-xl overflow-hidden group border border-[#141416] bg-cover bg-center block transition-all duration-500 hover:border-gray-700"
            style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.1)), url(${menImage})` }}
          >
            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="text-sm font-black tracking-widest uppercase text-white">MENSWEAR</h3>
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mt-2 block group-hover:text-white transition-colors duration-300">
                View Studio Catalog &rarr;
              </span>
            </div>
          </Link>

          <Link 
            to="/shop" 
            className="relative h-[450px] rounded-xl overflow-hidden group border border-[#141416] bg-cover bg-center block transition-all duration-500 hover:border-gray-700"
            style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.1)), url(${womenImage})` }}
          >
            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="text-sm font-black tracking-widest uppercase text-white">WOMENSWEAR</h3>
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mt-2 block group-hover:text-white transition-colors duration-300">
                View Studio Catalog &rarr;
              </span>
            </div>
          </Link>

          <Link 
            to="/shop" 
            className="relative h-[450px] rounded-xl overflow-hidden group border border-[#141416] bg-cover bg-center block transition-all duration-500 hover:border-gray-700"
            style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.1)), url(${kidsImage})` }}
          >
            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="text-sm font-black tracking-widest uppercase text-white">KIDS ASSEMBLY</h3>
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mt-2 block group-hover:text-white transition-colors duration-300">
                View Studio Catalog &rarr;
              </span>
            </div>
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#141416] py-12 text-center text-[9px] text-gray-600 tracking-[0.3em] uppercase">
        &copy; 2026 Lara Studios Inc. / Architecture Framework View
      </footer>
    </div>
  );
}

export default Home;