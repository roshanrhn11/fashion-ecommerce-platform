import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // புதிதாக இணைக்கப்பட்ட பிரீமியம் ஃபூட்டர்

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

function AppLayout() {
  const location = useLocation();

  // அட்மின் பேனல் பக்கங்களில் நேவ்பார் மற்றும் ஃபூட்டரை மறைப்பதற்கான கண்டிஷன்
  const hideLayoutElements = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-[#070708] text-[#F3F4F6] antialiased font-sans flex flex-col justify-between">
      
      {/* Global Navbar */}
      {!hideLayoutElements && <Navbar />}

      {/* Main Framework Viewport */}
      <main className="flex-grow">
        <Routes>
          {/* Customer Application Endpoints */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-orders" element={<MyOrders />} />

          {/* Dedicated Laravel Admin Core Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>

      {/* Global Luxury Footer Component */}
      {!hideLayoutElements && <Footer />}

    </div>
  );
}

function App() {
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