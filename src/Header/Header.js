import React from 'react';
import logo from '../Imgs/logo.svg'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <nav className="header">
      <div className="nav-left">
        <Link to="/"> <img className="logo" alt='logo' src={logo}/></Link>
        <Link to="/"><span className="logo-text">NOTARY NOW</span></Link>
      </div>

      <div className="nav-right">
        <Link to="/find">  <button className="nav-button">FIND</button> </Link>
        <Link to="/schedule">  <button className="nav-button">SCHEDULE</button> </Link>
        <Link to="/account">  <button className="nav-button">ACCOUNT</button> </Link>
      </div>
    </nav>
  );
}

export default Header;
