import React from 'react';
import Navigation from './Navigation/NavBar.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
