import React from 'react';
import { Search, Plus, Filter, MoreVertical, Edit2, Trash2 } from 'lucide-react';

const Dashboard = () => {
  const owners = [
    { name: "Siti Mujayan", email: "siti.mujayan@gmail.com", status: "Room Edited", date: "10 Jan, 2024", room: "Grand Luxury" },
    { name: "Alu Miyati", email: "alu.miyati@yahoo.com", status: "Owner", date: "24 Aug, 2023", room: "Classic Room" },
    { name: "Denin Hamman", email: "deninham@gmail.com", status: "Owner", date: "15 Oct, 2023", room: "Junior Suite" },
    { name: "Lina Maya", email: "linamaya@outlook.com", status: "Pending", date: "10 Des, 2023", room: "Normal Room" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-biru mb-6">Admin Dashboard</h1>

      {/* TOP ACTIONS */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-garis bg-white outline-none focus:ring-2 focus:ring-biru/20"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="bg-biru text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-biru/20 hover:bg-blue-600 transition">
            <Plus size={18} /> Add Owner
          </button>
          <button className="p-2.5 bg-white border border-garis rounded-xl text-teksSamping hover:bg-gray-50">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-2xl shadow-sm border border-garis overflow-hidden">
        <div className="p-6 border-b border-garis flex justify-between items-center">
          <h3 className="font-bold text-teks">List Hotel Owners</h3>
          <span className="text-xs bg-latar px-3 py-1 rounded-full font-medium text-teksSamping">Sort by: Newest</span>
        </div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F8F9FB] text-teksSamping text-xs uppercase font-bold">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Created Date</th>
              <th className="px-6 py-4">Room</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-garis">
            {owners.map((owner, i) => (
              <tr key={i} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <p className="font-bold text-sm text-teks">{owner.name}</p>
                  <p className="text-xs text-teksSamping">{owner.email}</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-lg text-[10px] font-bold ${
                    owner.status === 'Owner' ? 'bg-green-100 text-green-600' : 
                    owner.status === 'Pending' ? 'bg-gray-100 text-gray-400' : 'bg-blue-100 text-biru'
                  }`}>
                    {owner.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-teks">{owner.date}</td>
                <td className="px-6 py-4 text-sm text-teks">{owner.room}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3 text-gray-400">
                    <Edit2 size={16} className="cursor-pointer hover:text-biru" />
                    <Trash2 size={16} className="cursor-pointer hover:text-merah" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;