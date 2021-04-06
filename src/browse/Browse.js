import React, {useState} from 'react';
import Search from '../reusable-components/search/Search';
import StockCard from '../reusable-components/stock-card/StockCard';
import './Browse.scss';

function Browse() {
  const [searchData, setSearchData] = useState([]);

  function displaySearchData(data) {
    setSearchData(data);
  }

  // TODO: CHANGE CHART DATA STRUCTURE TO ACCEPT VALUE/TIME PARAMETER
  // https://www.chartjs.org/docs/latest/axes/cartesian/time.html#input-data

  if (searchData.length > 0) {
    return (
      <div className="browse">
        <Search handleSearchResults={displaySearchData}></Search>
        <div className="results">
          {/* TODO: DISPLAY RESULTS */}
          <div style={{'font-size': '250px'}}>{searchData.length}</div>
          <StockCard data={[Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
            Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
            Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500]}
          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          symbol={Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 5).toUpperCase()}></StockCard>
          <StockCard data={[Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
            Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
            Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500]}
          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          symbol={Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 5).toUpperCase()}></StockCard>
          <StockCard data={[Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
            Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
            Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500]}
          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          symbol={Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 5).toUpperCase()}></StockCard>
          <StockCard data={[Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
            Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
            Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500]}
          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          symbol={Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 5).toUpperCase()}></StockCard>
          <StockCard data={[Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
            Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
            Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500]}
          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          symbol={Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 5).toUpperCase()}></StockCard>
          <StockCard data={[Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
            Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
            Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500]}
          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          symbol={Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 5).toUpperCase()}></StockCard>
        </div>
      </div>
    );
  } else {
    return (
      <div className="browse">
        <Search handleSearchResults={displaySearchData}></Search>
        <div className="results">
        </div>
      </div>
    );
  }
}

export default Browse;
