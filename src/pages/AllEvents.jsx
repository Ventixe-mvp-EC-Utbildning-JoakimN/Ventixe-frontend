import { useEffect, useState } from "react";
import Eventcard from "../components/Eventcard";

export default function Home() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch("https://ventixe-joakim-ec-api-events.azurewebsites.net/api/events")
    .then(res => res.json())
    .then(data => setEvents(data))
    .catch(err => console.error("Fetching Booking error:", err))
  }, [])

  const handleBooking = (eventId) => {
    fetch("https://ventixe-joakim-ec-api-bookings.azurewebsites.net/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventId }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Booking failed");
        return res.json();
      })
      .then(() => {
        alert("✅ Event booked!");
      })
      .catch((err) => console.error("Booking error:", err));
  };

    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">All Bookings</h1>
        <ul className="grid grid-cols1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <Eventcard key={event.id} event={event} onBook={handleBooking} />
        ))}
        </ul>
      </div>
    );
  }