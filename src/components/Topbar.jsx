import { useState } from "react";
import Notification from "./Notification";


const Topbar = ({ title }) => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="sticky top-0 z-30 bg-[#f7f8fa] p-6 rounded-xl shadow mb-6 flex items-center justify-between">
      <div className="block sm:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#2358A6]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <h1 className="text-2xl font-bold text-[#2358A6]">{title}</h1>

      <div className="flex items-center gap-4">
        <Notification />
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded py-4 px-6 sm:hidden">
          <a href="/" className="block text-gray-700 mb-2">Dashboard</a>
          <a href="/events" className="block text-gray-700 mb-2">All Events</a>
        </div>
      )}
    </div>
  );
};

export default Topbar;
