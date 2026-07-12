import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";
import Register from "./pages/Register";

import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";




function AppLayout(){


  const location = useLocation();


  const hideNavbar =
      location.pathname.startsWith("/admin");



  return (

    <div className="min-h-screen bg-[#070708] text-[#F3F4F6] antialiased font-sans">


      {
        !hideNavbar && <Navbar />
      }



      <main className="pb-24">


        <Routes>


          {/* Customer */}

          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Products />} />

          <Route path="/products" element={<Products />} />

          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/my-orders" element={<MyOrders />} />




          {/* Admin */}

          <Route 
          path="/admin" 
          element={<AdminLogin />} 
          />


          <Route 
          path="/admin/dashboard" 
          element={<AdminDashboard />} 
          />



        </Routes>


      </main>


    </div>

  );

}





function App(){


  return (

    <AuthProvider>

      <CartProvider>

        <Router>

          <AppLayout />

        </Router>

      </CartProvider>

    </AuthProvider>

  );


}


export default App;