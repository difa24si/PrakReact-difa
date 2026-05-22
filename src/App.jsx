import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import "./assets/tailwind.css";
// LAYOUT
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Loading from "./components/Loading";

// PAGES
// import Dashboard from "./pages/Dashboard";
//import Customer from "./pages/Customer";
//import Orders from "./pages/Orders";
//import Error400 from "./pages/Error400";
//import Error401 from "./pages/Error401";
//import Error403 from "./pages/Error403";
//import NotFound from "./pages/NotFound";
//import MainLayout from "./layouts/MainLayout";
//import AuthLayout from "./layouts/AuthLayout";
//import Login from "./pages/auth/Login";
//import Register from "./pages/auth/Register";
//import Forgot from "./pages/auth/forgot";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customer = React.lazy(() => import("./pages/Customer"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/forgot"));
const Product = React.lazy(() => import("./pages/Product/"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail/"));

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
  const hideLayoutRoutes = ["/error400", "/error401", "/error403"];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          <Route path="/product" element={<Product />} />
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
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
