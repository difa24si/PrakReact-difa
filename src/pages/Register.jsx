import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const inputStyle = "w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition bg-white text-sm";
  const labelStyle = "block text-xs font-bold text-gray-700 mb-1 ml-1";

  return (
    <div className="min-h-screen bg-white p-8 md:p-12">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-playfair text-[#1A4B9F]">LankaStay.</h1>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Register Your Hotel</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {/* KOLOM KIRI (Personal Info) */}
          <div className="space-y-4">
            <div>
              <label className={labelStyle}>Name</label>
              <input type="text" placeholder="Enter your name" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Email</label>
              <input type="email" placeholder="name@gmail.com" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Phone No</label>
              <input type="text" placeholder="With Country Code" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Country</label>
              <input type="text" placeholder="Country Name" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>NIC</label>
              <input type="text" placeholder="National Identity Card" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Username</label>
              <input type="text" placeholder="Username" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Password</label>
              <input type="password" placeholder="8+ characters" className={inputStyle} />
            </div>
          </div>

          {/* KOLOM KANAN (Hotel Info) */}
          <div className="space-y-4">
            <div>
              <label className={labelStyle}>Hotel Name</label>
              <input type="text" placeholder="Full Name" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Registration No</label>
              <input type="text" placeholder="PVT(No)" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Address</label>
              <input type="text" placeholder="Location" className={inputStyle} />
            </div>
            {/* Upload Section */}
            <div className="border-2 border-dashed border-blue-400 rounded-xl p-4 bg-blue-50/30">
              <label className={labelStyle}>Upload Images</label>
              <input type="file" className="text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>
            <div>
              <label className={labelStyle}>Upload Documents</label>
              <input type="file" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Facilities</label>
              <textarea placeholder="Describe..." className={`${inputStyle} h-24 resize-none`}></textarea>
            </div>
          </div>

          {/* Centered Button */}
          <div className="md:col-span-2 flex flex-col items-center mt-6 space-y-4">
            <button className="w-full md:w-80 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-blue-200">
              Register
            </button>
            <p className="text-sm text-gray-500">
              Already have an account? <Link to="/login" className="text-blue-600 font-bold border-b border-blue-600">login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;