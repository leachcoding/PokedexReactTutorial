import React from 'react';
import Navigation from './Navigation/NavBar.js';
import PokemonList from './PokemonList/PokemonList.js';
import StatsPage from './StatsPage/StatsPage.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/' render={() => <PokemonList />} />
          <Route path='/detail/:id' component={StatsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
