import React from 'react';
import logo from '../Imgs/logo.svg'

function Header() {
  return (
    <nav className="header">
      <div className="nav-left">
        <img className="logo" alt='logo' src={logo}/>
        <span className="logo-text">NOTARY NOW</span>
      </div>

      <div className="nav-right">
        <button className="nav-button">FIND</button>
        <button className="nav-button">INBOX</button>
        <button className="nav-button">SCHEDULE</button>
        <button className="nav-button">ACCOUNT</button>
      </div>
    </nav>
  );
}

export default Header;
