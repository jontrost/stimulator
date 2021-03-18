import React, {useState, useEffect} from 'react';
import './Search.scss';
import '../../assets/search-icon.svg';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [assetList, setAssetList] = useState([]);

  // Move search to backend and just return list of filtered assets to state
  useEffect(() => {
    fetch('http://localhost:4000/assets')
        .then((res) => res.json())
        .then((response) => {
          setAssetList(response);
          console.log(searchTerm);
        })
        .catch((error) => console.log(error));
  }, []);

  return (
    <div className="search-bar">
      <input className="search-input" placeholder="Search for a stock name or ticker symbol"
        type="search" onChange={(e) => setSearchTerm(e.target.value)}>
      </input>
      <button className="search-icon"></button>
      {/* Maybe pass stocks that match search term to graphs and display there instead of in search dropdown */}
      <ul>{assetList.map((asset) => <li key={asset.name}>{asset.name}</li>)}</ul>
    </div>
  );
}

export default Search;
