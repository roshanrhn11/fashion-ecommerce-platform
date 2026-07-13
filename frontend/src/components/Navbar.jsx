import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { UserCircle, LogOut, LayoutDashboard } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { user, logout } = useContext(AuthContext);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    localStorage.removeItem("lara_admin_token");
    localStorage.removeItem("lara_admin_info");
    localStorage.removeItem("lara_user_token");
    localStorage.removeItem("lara_user_info");
    navigate("/");
    window.location.reload();
  };

  // Hide navbar inside admin dashboard paths completely
  if (
    location.pathname === "/admin" ||
    location.pathname === "/admin/dashboard"
  ) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#070708]/75 backdrop-blur-2xl border-b border-white/5 px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-300">
      
      {/* Premium Logo */}
      {/* Premium Logo Updated to StyleCart */}
      <Link 
        to="/" 
        className="text-lg md:text-xl font-light tracking-[0.35em] text-white uppercase select-none group"
      >
        Style<span className="font-serif italic text-[#d4af37] font-normal tracking-widest ml-1 transition-colors duration-300 group-hover:text-white">Cart</span>
      </Link>
      {/* Luxury Minimalist Navigation */}
      <div className="hidden md:flex items-center gap-10 text-[11px] font-medium tracking-[0.25em] uppercase">
        <Link 
          to="/" 
          className={`relative py-1 transition-colors duration-300 ${
            isActive("/") ? "text-[#d4af37]" : "text-gray-400 hover:text-white"
          }`}
        >
          Home
          {isActive("/") && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#d4af37]"></span>}
        </Link>

        <Link 
          to="/shop" 
          className={`relative py-1 transition-colors duration-300 ${
            isActive("/shop") || isActive("/products") ? "text-[#d4af37]" : "text-gray-400 hover:text-white"
          }`}
        >
          Shop Collection
          {(isActive("/shop") || isActive("/products")) && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#d4af37]"></span>}
        </Link>

        {user && user.role === "customer" && (
          <Link
            to="/my-orders"
            className={`relative py-1 transition-colors duration-300 ${
              isActive("/my-orders") ? "text-[#d4af37]" : "text-gray-400 hover:text-white"
            }`}
          >
            My Orders
            {isActive("/my-orders") && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#d4af37]"></span>}
          </Link>
        )}
      </div>

      {/* Right Section / Action Utilities */}
      <div className="flex items-center gap-6">
        
        {/* Modern Interactive Cart */}
        <Link 
          to="/cart" 
          className="relative p-2 text-gray-400 hover:text-white transition-colors group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.2} 
            stroke="currentColor" 
            className="w-5 h-5 transform group-hover:scale-105 transition-transform"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
            />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 bg-[#d4af37] text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
            {cartCount || 0}
          </span>
        </Link>

        {/* Authentication Handling Area */}
        {user ? (
          <div className="flex items-center gap-4 border-l border-white/10 pl-4">
            <span className="hidden sm:inline text-gray-400 text-[10px] uppercase tracking-widest">
              Hi, <span className="text-white font-medium">{user.name}</span>
            </span>

            {user.role === "admin" && (
              <Link
                to="/admin/dashboard"
                className="flex items-center gap-1.5 bg-[#d4af37] hover:bg-white text-black text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-full transition-all duration-300 shadow-lg shadow-[#d4af37]/10"
                title="Admin Dashboard"
              >
                <LayoutDashboard size={12} />
                <span className="hidden lg:inline">Dashboard</span>
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 border border-white/20 hover:border-red-500/50 hover:text-red-400 text-gray-300 text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-full transition-all duration-300"
              title="Logout Account"
            >
              <LogOut size={12} />
              <span className="hidden lg:inline">Logout</span>
            </button>
          </div>
        ) : (
          <Link 
            to="/login"
            className="flex items-center justify-center text-gray-400 hover:text-[#d4af37] transition-colors duration-300"
            title="Sign In"
          >
            <UserCircle size={24} strokeWidth={1.5} />
          </Link>
        )}

      </div>
    </nav>
  );
}

export default Navbar;