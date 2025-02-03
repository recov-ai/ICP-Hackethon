import React, { useState, useEffect } from "react";
import IconLoader from "../../utils/IconLoader";
import Auth from "../Auth";
import { getFrontendCanisterId } from "../../utils/canister"; 
import "../../scss/LandingPage/Heros.scss";
import { NavLink } from "react-router-dom";

const Heros = () => {
  const [userIdentity, setUserIdentity] = useState(localStorage.getItem("user") || null);
  const frontendCanisterId = getFrontendCanisterId();

  useEffect(() => {
    const handleStorageChange = () => {
      setUserIdentity(localStorage.getItem("user"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <section className="hero">
      <div className="content-text">
        <h1>Transforming Mental Health Support with Technology</h1>
        <p>
          The Decentralized Platform for Safe, Anonymous, and Accessible Mental
          Health Support
        </p>

        <div>
          {userIdentity ? (
            <NavLink to={`/dashboard?canisterId=${frontendCanisterId}`}>
              <button>Go To Dashboard</button>
            </NavLink>
          ) : (
            <Auth onAuthenticated={setUserIdentity} />
          )}
        </div>
      </div>

      <div className="content-img">
        <img src="/images/hero.png" alt="Hero" />
      </div>
    </section>
  );
};

export default Heros;
