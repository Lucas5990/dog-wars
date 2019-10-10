import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home.jsx';
import Main from './main/Main.jsx';
import End from './end/End.jsx';

export default props => (
    <BrowserRouter>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div>
        <Switch>
            <Route path='/end'>
                <End />
            </Route>
            <Route path="/main">
                <Main />
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
        </div>
    </BrowserRouter>
); 