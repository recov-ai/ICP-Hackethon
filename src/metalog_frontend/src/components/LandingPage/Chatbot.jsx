import React from 'react';
import '../../scss/LandingPage/Chatbot.scss';

const Chatbot = () => {
  return (
    <section className='chatbot'>
        <div className='content-text'>
            <div>
                <h1>AI-Powered Assistance</h1>
                <h1>Your First Step to Support Starts Here</h1>
            </div>
            <p>Our AI-driven chatbot provides immediate assistance, guiding you to the right resources and support network. It's like having a mental health assistant in your pocket.</p>
        </div>
        <div className='content-img'>
            <img src="/images/Chatbot.png" alt="" />
        </div>
    </section>
  )
}

export default Chatbot