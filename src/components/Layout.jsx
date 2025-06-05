import Notification from "./Notification";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    <div className="flex bg-white min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="">
        <Topbar title="Dashboard" />
          <div className="bg-[#f7f8fa] p-6 rounded-xl shadow">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
