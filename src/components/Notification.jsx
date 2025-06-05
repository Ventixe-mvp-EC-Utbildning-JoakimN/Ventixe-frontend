import { useEffect, useState } from "react";

export default function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  const [lastSeenId, setLastSeenId] = useState(() => {
  const saved = localStorage.getItem("lastSeenNotificationId");
  return saved ? parseInt(saved, 10) : null;
  });
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const fetchNotifications = () => {
      fetch("https://ventixe-joakim-ec-api-notifications.azurewebsites.net/api/notifications")
        .then(res => res.json())
        .then(data => {
          const sorted = data.sort((a, b) => b.id - a.id);
          setNotifications(sorted.slice(0, 10));

          const latestUnread = sorted.filter(n => lastSeenId === null || n.id > lastSeenId);
          setUnreadCount(latestUnread.length);
        })
        .catch(err => console.error("Failed to fetch notifications", err));
    };

    fetchNotifications();
    const interval = setInterval(fetchNotifications, 5000);
    return () => clearInterval(interval);
  }, [lastSeenId]);

  const toggleDropdown = () => {
    const newOpen = !open;
    setOpen(newOpen);

    if (!open && notifications.length > 0) {
    setLastSeenId(notifications[0].id);
    localStorage.setItem("lastSeenNotificationId", notifications[0].id);
    setUnreadCount(0);
    }
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="relative">
        {/* Bell icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9
               A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022
               c1.733.64 3.56 1.085 5.455 1.31m5.714 0
               a24.255 24.255 0 0 1-5.714 0m5.714 0
               a3 3 0 1 1-5.714 0" />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1.5 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-10 p-4">
          <h3 className="text-sm font-bold mb-2">Notifications</h3>
          <ul className="text-sm max-h-60 overflow-y-auto">
            {notifications.map(n => (
              <li key={n.id} className="border-b py-1 text-gray-700">
                {n.message}
                <br />
                <span className="text-xs text-gray-400">
                  {new Date(n.sentAt).toLocaleString("sv-SE")}
                </span>
              </li>
            ))}
            {notifications.length === 0 && (
              <li className="text-gray-500 italic">No notifications</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
