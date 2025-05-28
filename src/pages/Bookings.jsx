import { useEffect, useState } from "react";
import BookedEventCard from "../components/BookedEventCard";

export default function Home() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetch("https://localhost:7118/api/bookings")
    .then(res => res.json())
    .then(data => setBookings(data))
    .catch(err => console.error("Fetching Booking error:", err))
  }, [])

    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">All Bookings</h1>
        <ul className="grid grid-cols1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookings.map((event) => (
            <BookedEventCard key={`booked-${event.id}`} event={event} />
          ))}
        </ul>
      </div>
    );
  }