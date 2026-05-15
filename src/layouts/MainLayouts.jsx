import React from 'react';
import { LayoutDashboard, Users, Hotel, FileText, History, MessageSquare, HelpCircle, Settings, Bell } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const MainLayouts = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
    { icon: <Users size={20} />, label: 'Users', path: '/users' },
    { icon: <Hotel size={20} />, label: 'Hotel Owners', path: '/owners' },
    { icon: <FileText size={20} />, label: 'Booking Details', path: '/bookings' },
    { icon: <History size={20} />, label: 'History', path: '/history' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F9FB] w-full">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col sticky top-0 h-screen">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-blue-600 font-serif">LankaStay.</h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${location.pathname === item.path ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}>
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
          <div>
            <h2 className="text-sm text-gray-500 font-medium">Hello, Salman</h2>
            <p className="text-[10px] text-gray-400">Monday, 20 Oct 2023</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative p-2 bg-gray-50 rounded-lg">
              <Bell size={18} className="text-gray-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex items-center gap-3 border-l pl-6">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800">Salman Faris</p>
                <p className="text-[10px] text-gray-400">Admin</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">SF</div>
            </div>
          </div>
        </header>

        <main className="p-8 bg-[#F8F9FB]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayouts;