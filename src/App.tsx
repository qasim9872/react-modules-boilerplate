import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreProviders from './store';

function App() {
  return (
    <div className="flex mx-auto min-w-0 h-screen">
      <StoreProviders>
        <Router>
          <Switch>
            <Route path="/">
              <div className="text-black"> Hello World </div>
            </Route>
          </Switch>
        </Router>
      </StoreProviders>
    </div>
  );
}

export default App;
