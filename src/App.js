import { HashRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/browse" component={Browse}/>
          <Route exact path="/watchlist" component={Watchlist}/>
          <Route exact path="/settings" component={Settings}/>
        </Switch>
      </HashRouter>   
    </div>
  );
}

function OverviewPane() {
  return (
    <div className="OverviewPane">
    </div>
  );
}

function NavBar() {
  return (
    <div className="NavBar">
      <NavLink className="NavElement" activeClassName="selected" to="/dashboard">Dashboard</NavLink>
      <NavLink className="NavElement" activeClassName="selected" to="/portfolio">Portfolio</NavLink>
      <NavLink className="NavElement" activeClassName="selected" to="/browse">Browse</NavLink>
      <NavLink className="NavElement" activeClassName="selected" to="/watchlist">Watchlist</NavLink>
      <NavLink className="NavElement" activeClassName="selected" to="/settings">Settings</NavLink>
    </div>
  );
}

function Dashboard() {
  return(
    <div className="Dashboard">
      <OverviewPane></OverviewPane>
    </div>
  );
}

function Portfolio() {
  return(
    <div>
      Portfolio
    </div>
  );
}

function Browse() {
  return(
    <div>
      Browse
    </div>
  );
}

function Watchlist() {
  return(
    <div>
      Watchlist
    </div>
  );
}

function Settings() {
  return(
    <div>
      Settings
    </div>
  );
}

export default App;
