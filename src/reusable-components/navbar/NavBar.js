import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink className="nav-element" activeClassName="selected" to="/dashboard">Dashboard</NavLink>
      <NavLink className="nav-element" activeClassName="selected" to="/portfolio">Portfolio</NavLink>
      <NavLink className="nav-element" activeClassName="selected" to="/browse">Browse</NavLink>
      <NavLink className="nav-element" activeClassName="selected" to="/watchlist">Watchlist</NavLink>
      <NavLink className="nav-element" activeClassName="selected" to="/settings">Settings</NavLink>
    </div>
  );
}

export default NavBar;
