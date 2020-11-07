import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/route">
            This is a route.
          </Route>
          <Route path="/" exact>
            <nav>
              <Link to="/route">
                Route
              </Link>
            </nav>
          </Route>
          <Route path="/">
            Not Found
            <br />
            <Link to="/">
              Go Home
            </Link>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
