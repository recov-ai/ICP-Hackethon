import React from 'react';
import { FaBell, FaCog, FaUserCircle } from 'react-icons/fa';
import '../../scss/Dashboard/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar-dashboard">
      <div className="navbar-left">
        <h2>Hello, Azra Hudaya Rabbany</h2>
        <p>Welcome back, let's explore now!</p>
      </div>
      <div className="navbar-right">
        <FaBell className="icon" />
        <FaCog className="icon" />
        <FaUserCircle className="avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
