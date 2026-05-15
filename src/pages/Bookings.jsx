import React from 'react';
import { Search, Grid, List, Printer, Download, Filter, Edit, Trash2 } from 'lucide-react';

const Bookings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-biru mb-6">John Wick</h1>

      {/* Top Search & Filter Bar */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search documents..." 
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-garis bg-white outline-none focus:ring-2 focus:ring-biru/20"
          />
        </div>

        {/* Action Buttons & Selects */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-garis">
            <button className="p-2 bg-blue-50 text-biru rounded-lg"><Grid size={18} /></button>
            <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg"><List size={18} /></button>
            <div className="w-px h-6 bg-garis mx-1"></div>
            <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg"><Printer size={18} /></button>
            <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg"><Download size={18} /></button>
          </div>

          <div className="flex items-center gap-3">
            <select className="bg-white border border-garis rounded-xl px-4 py-2 text-sm outline-none">
              <option>Working</option>
            </select>
            <select className="bg-white border border-garis rounded-xl px-4 py-2 text-sm outline-none">
              <option>Archive</option>
            </select>
            <button className="bg-biru text-white p-2.5 rounded-xl"><Filter size={18} /></button>
          </div>
        </div>
      </div>

      {/* Booking List Section */}
      <div className="bg-white p-6 rounded-2xl border border-garis shadow-sm">
        <h3 className="font-bold text-teks mb-1">Booking List</h3>
        <p className="text-xs text-teksSamping mb-6">Found your 1 result log list</p>

        {/* Booking Card Item */}
        <div className="w-full max-w-sm border border-garis rounded-2xl p-3 shadow-sm">
          <div className="relative h-48 rounded-xl overflow-hidden mb-4">
            <img 
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070" 
              className="w-full h-full object-cover" 
              alt="Blue Origin"
            />
            <span className="absolute top-2 right-2 bg-biru text-white text-[10px] px-3 py-1 rounded-full font-bold">
              $200 per night
            </span>
            <div className="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black/80 to-transparent w-full">
              <h4 className="text-white font-bold">Blue Origin Fams</h4>
              <p className="text-white/80 text-[10px]">Gili, Sri Lanka</p>
            </div>
          </div>

          <div className="space-y-3 px-1 text-[11px]">
            <div className="flex justify-between">
              <span className="text-teksSamping">14 oct - 16 oct</span>
            </div>
            <p className="font-bold text-teks">03 Days</p>
            <p className="text-teksSamping leading-relaxed">
              GILI T TRAWANGAN, KODEPOS 83352, Main island, Gili.
            </p>
            
            <div className="pt-2 border-t border-garis flex justify-between items-center">
              <div>
                <p className="text-teksSamping font-medium">Initial Payment <span className="text-teks font-bold">$200</span></p>
                <p className="text-teksSamping font-medium">Total Payment <span className="text-biru font-bold">$400</span></p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-biru transition">
                  <Edit size={14} />
                </button>
                <button className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-merah transition">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;