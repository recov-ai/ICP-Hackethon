import React from 'react'
import IconLoader from "../../utils/IconLoader";
import "../../scss/LandingPage/Heros.scss";

const Heros = () => {
  return (
    <section className="hero">
        <div className="content-text">
            <h1>Transforming Mental Health Support with Technology</h1>
            <p>
                The Decentralized Platform for Safe, Anonymous, and Accessible Mental Health Support
            </p>
            <div>
                <button>
                Get Started Today <IconLoader name="arrow-right" className="icon-arrow" />
                </button>
            </div>
        </div>
        <div className="content-img">
            <img src="/images/hero.png" alt="Hero" />
        </div>
    </section>
  )
}

export default Heros