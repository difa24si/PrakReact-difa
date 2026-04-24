import React from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <div className="flex-1 p-6">
        
        {/* HEADER */}
        <Header />

        {/* TITLE */}
        <PageHeader title="Dashboard" subtitle="Dashboard / Order List" />

        {/* CARD */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          
          {/* CARD 1 */}
          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            <div className="bg-green-500 text-white p-3 rounded-full">
              🛒
            </div>
            <div>
              <h1 className="text-xl font-bold">75</h1>
              <p className="text-gray-500 text-sm">Total Orders</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            <div className="bg-blue-500 text-white p-3 rounded-full">
              🚚
            </div>
            <div>
              <h1 className="text-xl font-bold">175</h1>
              <p className="text-gray-500 text-sm">Total Delivered</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            <div className="bg-red-500 text-white p-3 rounded-full">
              ❌
            </div>
            <div>
              <h1 className="text-xl font-bold">40</h1>
              <p className="text-gray-500 text-sm">Total Canceled</p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            <div className="bg-yellow-500 text-white p-3 rounded-full">
              💰
            </div>
            <div>
              <h1 className="text-xl font-bold">Rp.128</h1>
              <p className="text-gray-500 text-sm">Total Revenue</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}