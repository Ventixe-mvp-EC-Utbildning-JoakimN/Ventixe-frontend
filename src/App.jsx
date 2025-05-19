import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './pages/Home';
import Bookings from './pages/Bookings';
import EventDetails from './pages/EventDetails';

function App() {

  return (
    <div>
      <nav>
        <Link to="/" >Dashboard</Link> |{" "}
        <Link to="/bookings">Bookings</Link> |{" "}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </div>
  )
}

export default App
