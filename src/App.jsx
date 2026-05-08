import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

// LAYOUT
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";

// PAGES
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import Orders from "./pages/Orders";
import Error400 from "./pages/Error400";
import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";
import NotFound from "./pages/NotFound";

// DUMMY PAGES
function Explore() {
  return <h1 className="text-2xl font-bold">Halaman Explore 🔍</h1>;
}

function Profile() {
  return <h1 className="text-2xl font-bold">Halaman Profile 👤</h1>;
}

function OrderDetail() {
  return <h1 className="text-2xl font-bold">Halaman Detail 📄</h1>;
}

function App() {
  const location = useLocation();

  // ROUTE TANPA SIDEBAR & HEADER
  const hideLayoutRoutes = [
    "/error400",
    "/error401",
    "/error403",
  ];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="flex min-h-screen bg-[#F5F6FA]">
      
      {/* SIDEBAR */}
      {!hideLayout && <Sidebar />}

      {/* CONTENT */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        {!hideLayout && <Header />}

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6">
          <Routes>

            {/* MAIN PAGES */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customer" element={<Customer />} />

            {/* DUMMY */}
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/detail" element={<OrderDetail />} />

            {/* ERROR */}
            <Route path="/error400" element={<Error400 />} />
            <Route path="/error401" element={<Error401 />} />
            <Route path="/error403" element={<Error403 />} />

            {/* NOT FOUND */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;