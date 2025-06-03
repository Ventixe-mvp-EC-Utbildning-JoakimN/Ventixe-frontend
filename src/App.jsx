import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AllEvents from "./pages/AllEvents";
import EventDetails from "./pages/EventDetails";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/events" element={<Layout><AllEvents /></Layout>} />
      <Route path="/event/:id" element={<Layout><EventDetails /></Layout>} />
    </Routes>
  );
}

export default App;
