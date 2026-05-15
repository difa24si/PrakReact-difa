import React from 'react';
import { MapPin, Star, Bed, Bath, Wifi, Coffee } from 'lucide-react';

const Details = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header / Navbar Minimalis */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-biru font-playfair">LankaStay.</h1>
        <div className="flex gap-8 text-sm font-medium text-teks">
          <a href="/" className="text-biru border-b-2 border-biru">Home</a>
          <a href="#">Hotels</a>
          <a href="#">Rooms</a>
          <button className="bg-biru text-white px-6 py-2 rounded-lg">Login</button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto mt-10 px-6">
        {/* Title Section */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <div className="flex gap-2 text-gray-400 text-sm mb-2">Home / <span className="text-teks font-semibold">Details</span></div>
            <h2 className="text-4xl font-bold text-gray-800">Blue Origin Fams</h2>
            <p className="flex items-center gap-1 text-gray-400 mt-1"><MapPin size={16}/> Gili, Sri Lanka</p>
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[450px]">
          <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" className="w-full h-full object-cover" alt="Main" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-1/2 rounded-3xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" className="w-full h-full object-cover" alt="Sub 1" />
            </div>
            <div className="h-1/2 rounded-3xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7" className="w-full h-full object-cover" alt="Sub 2" />
            </div>
          </div>
        </div>

        {/* Info & Booking */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">About the place</h3>
            <p className="text-teksSamping leading-relaxed text-sm">
              Minimalist room is a small but cozy room that will suit your needs. 
              It is equipped with all the basic amenities and will make your stay comfortable.
            </p>
            
            <div className="grid grid-cols-4 gap-4 mt-8">
              <div className="text-center p-4">
                <Bed className="mx-auto text-biru mb-2" />
                <p className="text-xs font-bold text-teks">5 Bedroom</p>
              </div>
              <div className="text-center p-4">
                <Bath className="mx-auto text-biru mb-2" />
                <p className="text-xs font-bold text-teks">3 Bathroom</p>
              </div>
              <div className="text-center p-4">
                <Wifi className="mx-auto text-biru mb-2" />
                <p className="text-xs font-bold text-teks">WiFi 10gbps</p>
              </div>
              <div className="text-center p-4">
                <Coffee className="mx-auto text-biru mb-2" />
                <p className="text-xs font-bold text-teks">Breakfast</p>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="border border-garis rounded-3xl p-8 bg-white shadow-sm h-fit">
            <p className="text-teksSamping mb-2">Start Booking</p>
            <div className="text-4xl font-bold text-hijau mb-6">$200 <span className="text-gray-300 text-lg font-normal">/ night</span></div>
            <button className="w-full bg-biru text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:scale-[1.02] transition-transform">
              Book Now!
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Details;