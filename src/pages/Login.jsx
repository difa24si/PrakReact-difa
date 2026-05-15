import React from 'react';

const Login = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Login Account</h2>
      
      <form className="text-left space-y-5">
        {/* Input Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input 
            type="text" 
            placeholder="Username" 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* Input Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input 
              type="password" 
              placeholder="Min 8 characters" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            {/* Ikon Mata (Optional) */}
            <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              👁️
            </button>
          </div>
        </div>

        <p className="text-[11px] text-gray-500 leading-tight">
          By signing up you agree to <span className="text-blue-600 cursor-pointer">terms and conditions</span> of site.
        </p>

        {/* Button Login */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-blue-200">
          Login
        </button>

        <div className="text-center mt-6">
          <button type="button" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;