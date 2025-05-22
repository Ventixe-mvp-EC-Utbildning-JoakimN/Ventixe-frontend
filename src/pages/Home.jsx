import { useEffect, useState } from "react";
import Eventcard from "../components/Eventcard";

export default function Home() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch("https://localhost:7072/api/events")
    .then(res => res.json())
    .then(data => setEvents(data))
    .catch(err => console.error("API error:", err));
  }, []);


    return (
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center text-[#2358A6]">Dashboard</h1>
  
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <ul className="space-y-4">
            {events.map(event => (
              <Eventcard key={event.id} event={event}/>
            ))}
          </ul>
        </div>
  
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Booked Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Här kommer BookedEventCards */}
          </div>
        </div>
      </div>
    );
  }
  