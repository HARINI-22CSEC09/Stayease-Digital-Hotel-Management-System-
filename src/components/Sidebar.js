import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaClipboardList, FaUserFriends, FaComments } from "react-icons/fa";
import { MdOutlineRoomPreferences, MdOutlinePayments } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="bg-dark text-white p-3 d-flex flex-column" style={{ width: "250px" }}>
      <h4 className="text-warning">HOTEL MANAGEMENT SYSTEM</h4>
      <div className="mt-3">
        <div className="d-flex align-items-center mb-3">
          <BsFillPersonFill size={30} className="me-2" />
          <div>
            <small>MANAGER</small>
          </div>
        </div>
        <ul className="list-unstyled">
          <li className="mb-3">
            <Link to="/dashboard" className="text-white text-decoration-none">
              <AiOutlineDashboard /> Dashboard
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/booking" className="text-white text-decoration-none">
              <FaClipboardList /> Reservation
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/rooms" className="text-white text-decoration-none">
              <MdOutlineRoomPreferences /> Manage Rooms
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/staff" className="text-white text-decoration-none">
              <FaUserFriends /> Staff Section
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/complaints" className="text-white text-decoration-none">
              <FaComments /> Manage Complaints
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/Statistics" className="text-white text-decoration-none">
              <MdOutlinePayments /> Statistics
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
