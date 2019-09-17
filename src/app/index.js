import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';
import MyPokemon from '../pages/MyPokemon';

const App = () => {
    return (
        <Switch>
            <Route path="/MyPokemon" component={MyPokemon}></Route>
            <Route path="/pokemon/:from/:id/:idx" component={Pokemon}></Route>
            <Route path="/" component={Home}></Route>
        </Switch>
    )
}

export default App;
