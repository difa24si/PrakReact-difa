import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Layouts
import MainLayouts from './layouts/MainLayouts';
import AuthLayout from './layouts/AuthLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register'; // Tambahkan ini
import Details from './pages/Details';
import Bookings from './pages/Bookings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* DASHBOARD ADMIN */}
        <Route path="/" element={<MainLayouts><Dashboard /></MainLayouts>} />
        <Route path="/bookings" element={<MainLayouts><Bookings /></MainLayouts>} />

        {/* AUTHENTICATION */}
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        
        {/* Register menggunakan layout sendiri/langsung karena formnya sangat lebar (2 kolom) */}
        <Route path="/register" element={<Register />} />

        {/* PUBLIC PAGES */}
        <Route path="/details" element={<Details />} />

      </Routes>
    </BrowserRouter>
  );
}