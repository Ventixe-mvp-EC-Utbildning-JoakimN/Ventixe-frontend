function Eventcard({event, onBook}) {
  return (
    <div>
        <li className="bg-white shadow p-4 rounded-lg">
            <img src="" alt="" />
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p>{event.dateTime}</p>
            <p className="text-sm text-gray-600">{event.type} • {event.location}</p>
            <p className="text-pink-600 font-semibold">${event.price}</p>
            <button
            onClick={() => onBook(event.id)}
            className="mt-2 px-4 py-2 text-sm bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-full transition"
            >
            Book event
            </button>
        </li> 
    </div>
  )
}
export default Eventcard
