import React, { useState } from "react";
import IconLoader from "../../utils/IconLoader";
import Auth from "../Auth";
import "../../scss/LandingPage/Heros.scss";

const Heros = () => {
  const [userIdentity, setUserIdentity] = useState(null);

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
            <p>Welcome, {userIdentity}!</p>
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
