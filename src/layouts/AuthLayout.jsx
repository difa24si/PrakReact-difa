import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* SISI KIRI: Gambar & Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative p-12 items-center justify-center">
        {/* Background Image Hotel */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070" 
            alt="LankaStay Background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay agar teks terbaca */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Kotak Transparan Putih di Tengah (Sesuai Gambar) */}
        <div className="relative z-10 bg-white/60 backdrop-blur-md p-16 rounded-[40px] shadow-2xl border border-white/30 text-center max-w-md">
          <h1 className="text-5xl font-bold font-playfair text-[#1A4B9F]">
            LankaStay<span className="text-black">.</span>
          </h1>
        </div>
      </div>

      {/* SISI KANAN: Form Login/Register */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-[400px]">
          {children}
        </div>
      </div>
    </div>
  );
}