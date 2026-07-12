import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#070708] text-[#F3F4F6] antialiased font-sans">
      <Navbar />

      <main className="pb-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;