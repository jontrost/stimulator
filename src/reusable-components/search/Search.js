import React from 'react';
import './Search.scss';
import '../../assets/search-icon.svg';

function Search() {
  return (
    <div className="search-bar">
      <input className="search-input" placeholder="Search for a stock name or ticker symbol" type="search"></input>
      <button className="search-icon"></button>
    </div>
  );
}

export default Search;
