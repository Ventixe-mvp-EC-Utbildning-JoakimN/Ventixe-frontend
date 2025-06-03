import { useEffect, useState } from "react"

function Notification() {
    const [notifications, setNotifications] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch("https://localhost:7018/api/notifications")
        .then((res) => res.json())
        .then((data) => setNotifications(data))
        .catch((err) => console.error("Failed to fetch notifications", err))
    }, [])

  return (
    <div className="relative">
        <button onClick={() => setOpen(!open)} className="relative"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
        {notifications.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-.5 rounded-full">
                {notifications.length}
            </span>
        )}
        </button>
        {open && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-10 p-4">
                <h3 className="text-sm font-bold mb-2">Notifications</h3>
                <ul className="text-sm max-h-60 overflow-y-auto">
                    {notifications.map((n) => (
                    <li key={n.id} className="border-b py-1 text-gray-700">
                        {n.message}
                        <br />
                        <span className="text-xs text-gray-400">
                        {new Date(n.sentAt).toLocaleString("sv-SE")}
                        </span>
                    </li>
                    ))}
                    {notifications.length === 0 && (
                        <li className="text-gray-500 italic">No notifications yet</li>
                    )}
                </ul>
            </div>
        )}
    </div>
  )
}
export default Notification