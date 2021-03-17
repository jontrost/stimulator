import React, {useState, useEffect} from 'react';
import './Search.scss';
import '../../assets/search-icon.svg';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [assetList, setAssetList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/assets')
    // Maybe don't need this then statement


    //USE EFFECT NOT GETTING CALLED??
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          setAssetList(response);
        })
        .catch((error) => console.log(error));
  });

  return (
    <div className="search-bar">
      {assetList}
      {searchTerm}
      <input className="search-input" placeholder="Search for a stock name or ticker symbol"
        type="search" onChange={(e) => setSearchTerm(e.target.value)}>
      </input>
      <button className="search-icon"></button>
    </div>
  );
}

export default Search;
