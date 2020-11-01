import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./scenes/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
