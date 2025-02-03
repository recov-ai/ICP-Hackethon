import '../../scss/LandingPage/Navbar.scss';
import React, { useState, useEffect } from "react";
import Auth from "../Auth";

const Navbar = () => {
    const [userIdentity, setUserIdentity] = useState(localStorage.getItem("user") || null);

    useEffect(() => {
      const handleStorageChange = () => {
        setUserIdentity(localStorage.getItem("user"));
      };

      window.addEventListener("storage", handleStorageChange);
      return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    return (
      <nav className="navbar">
        <img src='/images/logo-metalog.png' className="navbar-logo" />
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/#program">Our Programs</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li>
            <a>
              {userIdentity ? (
                <p>Welcome, {userIdentity}!</p>
              ) : (
                <Auth onAuthenticated={setUserIdentity} />
              )}
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  
export default Navbar;
