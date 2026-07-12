import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { UserCircle } from "lucide-react";


function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();

  const { cartCount } = useCart();

  const { user, logout } = useContext(AuthContext);
  console.log(user);


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



  // Hide navbar inside admin pages
  if (
    location.pathname === "/admin" ||
    location.pathname === "/admin/dashboard"
  ) {
    return null;
  }



  return (

    <nav className="sticky top-0 z-50 bg-[#070708]/80 backdrop-blur-xl border-b border-[#141416] px-8 py-5 flex justify-between items-center">


      {/* Logo */}

      <Link 
        to="/" 
        className="text-xl font-black tracking-[0.25em] text-white uppercase select-none"
      >

        LARA<span className="text-[#A1A1AA]">
          STUDIOS
        </span>

      </Link>





      {/* Navigation */}

      <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase">


        <Link 
          to="/" 
          className={
            isActive("/")
            ? "text-white"
            :
            "text-gray-500 hover:text-white"
          }
        >

          Home

        </Link>





        <Link 
          to="/shop" 
          className={
            isActive("/shop") || isActive("/products")
            ?
            "text-white"
            :
            "text-gray-500 hover:text-white"
          }
        >

          Shop Collection

        </Link>





 {
    user && user.role === "customer" && (
        <Link
            to="/my-orders"
            className="text-xs uppercase tracking-widest"
        >
            My Orders
        </Link>
    )
}


      </div>






      {/* Right Section */}

      <div className="flex items-center gap-6">





        {/* Cart */}

        <Link 
          to="/cart" 
          className="relative p-2 text-gray-400 hover:text-white transition-colors group"
        >

          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-5 h-5"
          >

            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
            />

          </svg>



          <span className="absolute -top-1 -right-1 bg-white text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">

            {cartCount || 0}

          </span>


        </Link>







        {/* Authentication Area */}


        {
          user ?


          (

            <div className="flex items-center gap-4">


              <span className="text-white text-xs uppercase tracking-widest">

                Hi, {user.name}

              </span>




              {

                user.role === "admin"

                &&

                <Link

                  to="/admin/dashboard"

                  className="bg-amber-500 hover:bg-amber-400 text-black text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded"

                >

                  Admin Dashboard

                </Link>

              }




              <button

                onClick={handleLogout}

                className="bg-white hover:bg-gray-200 text-black text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded"

              >

                Logout

              </button>


            </div>


          )


          :


          (

                <Link 
                  to="/login"
                  className="flex items-center justify-center text-white hover:text-gray-400 transition"
                  title="Sign In"
              >
                  <UserCircle size={28} strokeWidth={1.5} />
              </Link>


          )

        }



      </div>



    </nav>

  );

}


export default Navbar;