import React, {useState, useEffect} from 'react';
import './Search.scss';
import '../../assets/search-icon.svg';

function Search(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [masterAssetList, setMasterAssetList] = useState([]);

  useEffect(() => {
    async function fetchAssets() {
      const response = await fetch('http://localhost:4000/assets');
      const assets = await response.json();
      setMasterAssetList(assets);
    }
    fetchAssets();
  }, []);

  useEffect(() => {
    let timer;
    if (!searchTerm || searchTerm.length < 3) {
      setShowSearchSuggestions(false);
    } else {
      timer = setTimeout(() => {
        const searchSuggestions = masterAssetList.filter((asset) =>
          asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchSuggestions(searchSuggestions);
        setShowSearchSuggestions(true);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [searchTerm]);

  async function handleSearchSubmit(e) {
    e.preventDefault();
    const searchSuggSymbols = [];
    searchSuggestions.forEach((sugg) => {
      searchSuggSymbols.push(sugg.symbol);
    });
    const symbols = searchSuggSymbols.join();

    async function fetchPriceData() {
      const response = await fetch(`http://localhost:4000/price-data-multiple/${symbols}`);
      return await response.json();
    }

    const priceDataArray = await fetchPriceData();
    props.handleSearchResults(priceDataArray);
  }

  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <input className="search-input" placeholder="Search for a stock name or ticker symbol"
          type="search" onChange={(e) => setSearchTerm(e.target.value)}>
        </input>
        <button className="search-icon" onClick={(e) => handleSearchSubmit(e)}></button>
      </div>
      <div className={`search-options-wrapper ${showSearchSuggestions ? '' : 'hidden'}`}>
        <ul className="search-options">
          {searchSuggestions.length > 0 ? searchSuggestions.map((asset) =>
            <li className="search-option" key={asset.symbol}>{asset.symbol} - {asset.name}</li>) :
            <li className="search-option">No matches found</li>}
        </ul>
      </div>
    </div>
  );
}

export default Search;
