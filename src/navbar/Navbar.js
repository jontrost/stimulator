import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <div className="Navbar">
      <NavLink className="NavElement" activeClassName="selected" to="/dashboard">Dashboard</NavLink>
      <NavLink className="NavElement" activeClassName="selected" to="/portfolio">Portfolio</NavLink>
      <NavLink className="NavElement" activeClassName="selected" to="/browse">Browse</NavLink>
      <NavLink className="NavElement" activeClassName="selected" to="/watchlist">Watchlist</NavLink>
      <NavLink className="NavElement" activeClassName="selected" to="/settings">Settings</NavLink>
    </div>
  );
}

export default Navbar;
