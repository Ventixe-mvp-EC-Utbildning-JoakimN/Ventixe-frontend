import { useEffect, useState } from "react";
import Eventcard from "../components/Eventcard";
import BookedEventCard from "../components/BookedEventCard";
import Notification from "../components/Notification";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [bookedEvents, setBookedEvents] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);


  useEffect(() => {
    fetch("https://localhost:7072/api/events")
    .then(res => res.json())
    .then(data => setEvents(data))
    .catch(err => console.error("API error:", err));
  }, []);


  const handleBooking = (eventId) => {
    fetch("https://localhost:7118/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ eventId }),
    })
      .then((res) => {
        if(!res.ok) throw new Error("Failed to book event");
        return res.json();
      })
      .then(() => {
        const bookedEvent = events.find(e => e.id === eventId);
        setBookedEvents(prev => [...prev, bookedEvent]);
      })
      .catch((err) => console.error("Booking error:", err))
  }


    return (
      <div>
        <div>
        <h1 className="text-3xl font-bold mb-6 text-center text-[#2358A6]">Dashboard</h1>

        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <ul className="space-y-4">
          {events.slice(0, 3).map(event => (
              <Eventcard key={event.id} event={event} onBook={handleBooking}/>
            ))}
          </ul>
        </div>
  
        <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Booked Events</h2>
        {bookedEvents.length === 0 ? (
          <p className="text-gray-500 italic">You haven't booked any events yet</p>
        ) : (          
          <ul className="flex flex-wrap gap-4">
          {bookedEvents.map(event => (
            <BookedEventCard key={`booked-${event.id}`} event={event} onClick={setSelectedBooking}/>
          ))}
          </ul>
        )}
        </div>
        {selectedBooking && (
          <div className="fixed inset-0 bg-[#2358A6]/10 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl w-96 shadow-lg relative">
            <div className="h-40 bg-gray-100 rounded mb-2"></div>
              <button onClick={() => setSelectedBooking(null)} className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl">
              ✕
              </button>
              <h2 className="text-xl font-bold mb2">{selectedBooking.title}</h2>
              <div className="flex flex-row gap-1">
                <p className="text-sm text-gray-500 mb-1">
                  {new Date(selectedBooking.dateTime).toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mb-2">{selectedBooking.location}</p>
              </div>
              <p className="text-sm text-gray-600 mb-2">{selectedBooking.description}</p>
              <p className="text-sm text-gray-600 italic">{selectedBooking.type}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  