import React from 'react';
import StockCard from '../reusable-components/stock-card/StockCard';
import './Browse.scss';

function Browse() {
  return (
    <div className="browse">
      <div className="search-bar">
        <input className="search-input"></input>
      </div>
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
