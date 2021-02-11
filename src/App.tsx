import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Navbar } from './components';
import modules from './modules';
import StoreProviders from './store';

function App() {
  return (
    <div className="flex flex-col mx-auto min-w-0 h-screen">
      <Navbar modules={modules} />
      <div className="App-content">
        {modules.map((module) => (
          <Route {...module.routeProps} key={module.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
