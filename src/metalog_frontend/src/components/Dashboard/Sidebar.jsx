import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RiWalletFill, RiHome6Line, RiChatAiLine, RiChatSmile3Line, RiExchangeDollarLine, RiFileList2Line, RiFileChartLine } from 'react-icons/ri';
import { IoCopy } from "react-icons/io5";
import '../../scss/Dashboard/Sidebar.scss';
import { getFrontendCanisterId } from "../../utils/canister"; // Import fungsi untuk mendapatkan canisterId frontend

const Sidebar = () => {
  const location = useLocation();
  const frontendCanisterId = getFrontendCanisterId(); 

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/images/metalog logo sidebar.png" alt="Metalog Logo" className="logo" />
      </div>

      <div className="balance">
        <div className='header-balance'>
          <div className='icon-balance'>
            <RiWalletFill />
          </div>
          <p>Your Balance</p>
        </div>
        <div className='balance-user'>
          <div className='balance-icp'>
            <img src="/images/ICP Logo.png" alt="ICP Logo" />
            <p>2 ICP</p>
          </div>
          <h5>Rp 280,203.76</h5>
        </div>
        <div className='wallet-address'>
          <p className='wallet-label'>Wallet Address:</p>
          <div className="wallet">
            <p>0x1q9xvl8kqyqrfhkyzk59s...</p>
            <IoCopy className='icon-wallet' />
          </div>
        </div>
      </div>

      <nav className="sidebar-menu">
        <h4>Menu</h4>
        {import.meta.env.VITE_ROLE === "user" ? (
          <ul>
            <li className={location.pathname === '/dashboard' ? 'active' : ''}>
              <NavLink to={`/dashboard?canisterId=${frontendCanisterId}`} className="menu-item">
                <RiHome6Line className="icon" />
                <span>Home</span>
              </NavLink>
            </li>
            <li className={location.pathname === '/ask-ai' ? 'active' : ''}>
              <NavLink to={`/ask-ai?canisterId=${frontendCanisterId}`} className="menu-item">
                <RiChatAiLine className="icon" />
                <span>Ask AI</span>
              </NavLink>
            </li>
            <li className={location.pathname === '/consultation' ? 'active' : ''}>
              <NavLink to={`/consultation?canisterId=${frontendCanisterId}`} className="menu-item">
                <RiChatSmile3Line className="icon" />
                <span>Consultation</span>
              </NavLink>
            </li>
            <li className={location.pathname === '/transaction' ? 'active' : ''}>
              <NavLink to={`/transaction?canisterId=${frontendCanisterId}`} className="menu-item">
                <RiExchangeDollarLine className="icon" />
                <span>Transaction</span>
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul>
            <li className={location.pathname === '/dashboard' ? 'active' : ''}>
              <NavLink to={`/dashboard?canisterId=${frontendCanisterId}`} className="menu-item">
                <RiHome6Line className="icon" />
                <span>Home</span>
              </NavLink>
            </li>
            <li className={location.pathname === '/ask-ai' ? 'active' : ''}>
              <NavLink to={`/ask-ai?canisterId=${frontendCanisterId}`} className="menu-item">
                <RiChatAiLine className="icon" />
                <span>Ask AI</span>
              </NavLink>
            </li>
            <li className={location.pathname === '/order' ? 'active' : ''}>
              <NavLink to={`/order?canisterId=${frontendCanisterId}`} className="menu-item">
                <RiFileList2Line className="icon" />
                <span>Order</span>
              </NavLink>
            </li>
            <li className={location.pathname === '/report' ? 'active' : ''}>
              <NavLink to={`/report?canisterId=${frontendCanisterId}`} className="menu-item">
                <RiFileChartLine className="icon" />
                <span>Report</span>
              </NavLink>
            </li>
          </ul>
        )}
      </nav>

      <button className="post-btn">
        <span>Post</span>
      </button>
    </aside>
  );
};

export default Sidebar;
