function BookedEventCard({ event, onClick }) {
    console.log("Image URL:", event.imageUrl);

  return (
    <li className="bg-white rounded-2xl w-54 shadow flex flex-col gap-1 cursor-pointer hover:bg-gray-50 transition" onClick={() => onClick(event)}>
        <div className="w-auto h-40 bg-gray-100 rounded mb-2"></div>
        <div className="text-xs mb-2 px-4">
            <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                {event.type}
            </span>
        </div>
        <div className="flex flex-col gap-1 px-4 pb-4">
            <h3 className="text-base font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.location}</p>
            <p className="text-sm text-gray-400 mt-auto">{new Date(event.dateTime).toLocaleDateString()}</p>
        </div>
    </li>
  )
}
export default BookedEventCard