import React from 'react';
import './Dashboard.scss';
import OverviewPane from './overview-pane/OverviewPane';

function Dashboard() {
  return (
    <div className="dashboard">
      <OverviewPane></OverviewPane>
    </div>
  );
}

export default Dashboard;
