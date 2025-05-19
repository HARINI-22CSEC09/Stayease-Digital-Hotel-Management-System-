import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Booking from "./booking";
import Login from "./Login.js";
import Dashboard from "./Dashboard"; 
import RoomsPage from "./RoomPage";
import Statistics from "./Statistics.js";
import Staff from "./Staff.js";
import Complaints from "./Complaints.js";
import RoomplacementPage from "./RoomPlacementPage.jsx";
import Home from "./Home.js"
import Spa from "./Spa.js"
import Feedback from "./Feedback.js"
import Experience from "./Experience.js"
import About from "./About.js"
import Book from "./Book.js"
import Dine from "./Dining.js"
import Payment from "./Paymentpage.js"
//import { StrictModeDroppable } from "./StrictModeDroppable.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} /> 
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/room-placement" element={<RoomplacementPage />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/home" element={<Home />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/exp" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/dine" element={<Dine />} />
         <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
