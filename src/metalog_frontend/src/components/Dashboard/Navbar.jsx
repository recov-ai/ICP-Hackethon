import React from 'react';
import { FaBell, FaCog, FaUserCircle } from 'react-icons/fa';
import { RiSettings3Line, RiNotification2Line } from "react-icons/ri";
import '../../scss/Dashboard/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar-dashboard">
      <div className="navbar-left">
        <h2>Hello, Azra Hudaya Rabbany</h2>
        <p>Welcome back, let's explore now!</p>
      </div>
      <div className="navbar-right">
        <div className='border-icon-navbar'>
          <RiNotification2Line className="icon" />
        </div>
        <div className='border-icon-navbar'>
          <RiSettings3Line className="icon" />
        </div>
        <img src='/images/profile6.png' className="avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
