import React from 'react';
import '../../scss/LandingPage/Privacy.scss';
import IconLoader from '../../utils/IconLoader';

const Privacy = () => {
  return (
    <section className='privacy'>
        <div className='content-text'>
            <h1>Your Privacy, Protected by Blockchain</h1>
            <p>In a world where mental health support is often stigmatized and inaccessible, Metalog bridges the gap. Whether you're seeking professional help or peer-to-peer support, our platform connects you to resources anytime, anywhere.</p>
            <div>
                <button>
                Learn More About Our Technology <IconLoader name="arrow-right" className="icon-arrow" />
                </button>
            </div>
        </div>
        <div className='content-img'>
            <img src="/images/privacy.png" alt="" />
        </div>
    </section>
  )
}

export default Privacy