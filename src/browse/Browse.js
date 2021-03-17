import React from 'react';
import Search from '../reusable-components/search/Search';
import StockCard from '../reusable-components/stock-card/StockCard';
import './Browse.scss';

function Browse() {
  return (
    <div className="browse">
      <Search></Search>
      <div className="results">
        <StockCard data={[Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
          Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
          Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500]}
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
        chartLabel="Price"
        profitable={true}
        symbol={Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 5).toUpperCase()}></StockCard>
        <StockCard data={[Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
          Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
          Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500]}
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
        chartLabel="Price"
        profitable={true}
        symbol={Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 5).toUpperCase()}></StockCard>
        <StockCard data={[Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
          Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
          Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500]}
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
        chartLabel="Price"
        profitable={true}
        symbol={Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 5).toUpperCase()}></StockCard>
        <StockCard data={[Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
          Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
          Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500]}
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
        chartLabel="Price"
        profitable={true}
        symbol={Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 5).toUpperCase()}></StockCard>
        <StockCard data={[Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
          Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
          Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500]}
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
        chartLabel="Price"
        profitable={true}
        symbol={Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 5).toUpperCase()}></StockCard>
        <StockCard data={[Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
          Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
          Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500]}
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
        chartLabel="Price"
        profitable={true}
        symbol={Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 5).toUpperCase()}></StockCard>
      </div>
    </div>
  );
}

export default Browse;
