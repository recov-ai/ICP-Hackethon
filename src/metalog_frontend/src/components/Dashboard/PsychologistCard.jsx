import React from 'react';
import { FaStar, FaComment, FaLock } from 'react-icons/fa';
import '../../scss/Dashboard/PsychologistCard.scss';

const PsychologistCard = ({ name, experience, price, rating, profile }) => {
  return (
    <div className="psychologist-card">
      <img src={profile} alt="Psychologist" className="psychologist-img" />
      <div className="psychologist-info">
        <h4>{name}</h4>

        <div className="psychologist-details">
          <div className="experience">
            <FaLock className="icon" /> <span>{experience}</span>
          </div>
          <div className="rating">
            <FaStar className="icon star" /> <span>{rating} / 5</span>
          </div>
        </div>

        <div className='info-price'>
            <div className='detail-price'>
                <img src="/images/ICP Logo.png" alt="icp logo" />
                <p className="price">{price}</p>
            </div>
            <button className="chat-btn"><FaComment /> Chat</button>
        </div>
      </div>
    </div>
  );
};

export default PsychologistCard;
