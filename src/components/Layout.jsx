import Notification from "./Notification";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}
