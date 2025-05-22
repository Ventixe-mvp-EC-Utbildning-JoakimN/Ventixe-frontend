function Eventcard({event}) {
  return (
    <div>
        <li className="bg-white shadow p-4 rounded-lg">
            <img src="" alt="" />
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p>{event.dateTime}</p>
            <p className="text-sm text-gray-600">{event.type} • {event.location}</p>
            <p className="text-pink-600 font-semibold">${event.price}</p>
        </li> 
    </div>
  )
}
export default Eventcard
