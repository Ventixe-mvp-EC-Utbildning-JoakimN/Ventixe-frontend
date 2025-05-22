import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    pathname === path
      ? "text-pink-500 font-semibold"
      : "text-gray-700 hover:text-pink-400";

  return (
    <div className="w-64 min-h-screen bg-purple-50 p-4">
      <div className="text-2xl font-bold mb-6">🎟️ Ventixe</div>
      <nav className="flex flex-col space-y-4">
        <Link to="/" className={linkClass("/")}>Dashboard</Link>
        <Link to="/bookings" className={linkClass("/bookings")}>Bookings</Link>
      </nav>
    </div>
  );
}
