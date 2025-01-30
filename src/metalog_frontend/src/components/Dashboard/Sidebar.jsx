import React from 'react';
import { FaHome, FaRobot, FaComments, FaWallet, FaPlus } from 'react-icons/fa';
import '../../scss/Dashboard/Sidebar.scss';

const Sidebar = () => {
return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/images/logo-metalog.png" alt="Metalog Logo" className="logo" />
      </div>

      <div className="balance">
        <p>Your Balance</p>
        <h3>2 ICP</h3>
        <span>Rp 280,203.76</span>
        <p className="wallet">Wallet Address: 0x1q9x...</p>
      </div>

      <nav className="sidebar-menu">
        <ul>
          <li>
            <FaHome className="icon" />
            <span>Home</span>
          </li>
          <li>
            <FaRobot className="icon" />
            <span>Ask AI</span>
          </li>
          <li>
            <FaComments className="icon" />
            <span>Consultation</span>
          </li>
          <li>
            <FaWallet className="icon" />
            <span>Transaction</span>
          </li>
        </ul>
      </nav>

      <button className="post-btn">
        <FaPlus className="icon" />
        <span>Post</span>
      </button>
    </aside>
  );
};

export default Sidebar;
