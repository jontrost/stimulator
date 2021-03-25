import React, {useState, useEffect} from 'react';
import './Search.scss';
import '../../assets/search-icon.svg';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [assetList, setAssetList] = useState([]);
  let typingStoppedTimeout;

  useEffect(() => {
    fetch('http://localhost:4000/assets')
        .then((res) => res.json())
        .then((response) => {
          setAssetList(response);
        })
        .catch((error) => console.log(error));
  }, []);

  function assetSearch() {
    return assetList.filter((asset) => asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  function handleOnChange(e) {
    clearTimeout(typingStoppedTimeout);
    typingStoppedTimeout = setTimeout(() => setSearchTerm(e), 500);
  }

  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <input className="search-input" placeholder="Search for a stock name or ticker symbol"
          type="search" onChange={(e) => handleOnChange(e.target.value)}>
        </input>
        <button className="search-icon"></button>
      </div>
      <div className={`search-options-wrapper ${searchTerm == '' ? 'hidden' : ''}`}>
        <ul className="search-options">
          {assetSearch().map((asset) =>
            <li className="search-option" key={asset.symbol}>{asset.name}{asset.symbol}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Search;
