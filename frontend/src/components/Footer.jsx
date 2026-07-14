import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#070708] border-t border-white/5 text-gray-500 text-xs font-light antialiased">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
        
        {/* Brand Statement */}
        <div className="md:col-span-1">
            <Link to="/" className="text-white text-base font-light tracking-[0.35em] uppercase block mb-4">
            Style<span className="text-[#d4af37] font-serif italic tracking-widest ml-1">Cart</span>
            </Link>
          <p className="leading-relaxed text-gray-500 max-w-xs tracking-wide">
            High-end curated avant-garde garments, meticulously designed for modern elegance and timeless identity.
          </p>
        </div>

        {/* Quick Collections Directives */}
        <div>
          <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Collections</h4>
          <ul className="space-y-2.5 tracking-wider">
            <li><Link to="/shop?category=Men" className="hover:text-white transition-colors">Men's Capsule</Link></li>
            <li><Link to="/shop?category=Women" className="hover:text-white transition-colors">Women's Atelier</Link></li>
            <li><Link to="/shop?category=Kids" className="hover:text-white transition-colors">Kids Contemporary</Link></li>
            <li><Link to="/shop?category=New" className="hover:text-white transition-colors">Seasonal Drop</Link></li>
          </ul>
        </div>

        {/* Legal & Standards */}
        <div>
          <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Assistance</h4>
          <ul className="space-y-2.5 tracking-wider">
            <li><span className="hover:text-white cursor-pointer transition-colors">Track Shipment</span></li>
            <li><span className="hover:text-white cursor-pointer transition-colors">Returns & Exchanges</span></li>
            <li><span className="hover:text-white cursor-pointer transition-colors">Size Guide Metric</span></li>
            <li><span className="hover:text-white cursor-pointer transition-colors">Privacy Charter</span></li>
          </ul>
        </div>

        {/* Contact and Signature */}
        <div>
          <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Atelier Info</h4>
          <p className="leading-relaxed mb-2 tracking-wide">Digital Flagship Store</p>
          <p className="text-[#d4af37] font-medium tracking-wide">support@stylecart.com</p>
          <div className="mt-4 flex gap-4 text-white/40">
            <span className="hover:text-white cursor-pointer text-[10px] tracking-widest uppercase">FB</span>
            <span className="hover:text-white cursor-pointer text-[10px] tracking-widest uppercase">IG</span>
            <span className="hover:text-white cursor-pointer text-[10px] tracking-widest uppercase">TW</span>
          </div>
        </div>

      </div>

      {/* Under-Footer Copyright Plate */}
      <div className="border-t border-white/5 py-6 text-center text-[10px] tracking-[0.15em] text-gray-600 uppercase">
        © {new Date().getFullYear()} Lara Studios. All Rights Reserved. Engineered for Excellence.
      </div>
    </footer>
  );
};

export default Footer;