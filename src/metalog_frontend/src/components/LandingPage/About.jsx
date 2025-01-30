import React from 'react';
import '../../scss/LandingPage/About.scss';

const About = () => {
  return (
    <section className='about'>
        <div className='content-text'>
            <div>
                <h1>Take the First</h1>
                <h1>Step Toward Better Mental Health</h1>
            </div>
            <p>Metalog is here to redefine how we approach mental health support. Join us today and become part of a global movement for accessible, private, and innovative care.</p>
        </div>
        <div className='content-img'>
            <img src="/images/about.png" alt="" />
        </div>
    </section>
  )
}

export default About