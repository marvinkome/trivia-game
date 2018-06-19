//  Root component, initialize routing and redux

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from './router';
import createStore from './redux/store';
import state from './default-state';
import Home from './home';
import Quiz from './quiz';
import Results from './results';

import 'materialize-css/dist/css/materialize.css';
import './styles.less';

// create state from initial data.
// TODO: fetch initial data from api
// create store in ./redux/store
const store = createStore(state);

export const App = () => (
    <Provider store={store}>
        <Router>
            <Route Component={Home} path="" />
            <Route Component={Quiz} path="quiz" />
            <Route Component={Results} path="results" />
        </Router>
    </Provider>
);
