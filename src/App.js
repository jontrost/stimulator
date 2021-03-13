import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Navbar from './navbar/Navbar'
import Browse from './browse/Browse'
import Settings from './settings/Settings'
import Watchlist from './watchlist/Watchlist'
import Portfolio from './portfolio/Portfolio'
import './App.scss'

function App () {
  return (
    <div className="App">
      <HashRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/watchlist" component={Watchlist} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
