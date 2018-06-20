//  Root component, initialize routing and redux

import React from 'react';

// Redux
import { Provider } from 'react-redux';
import createStore from './redux/store';
import state from './default-state';

// Routing
import { Router, Route } from './router';

// screens
import Home from './home';
import Quiz from './quiz';
import Results from './results';

import 'materialize-css/dist/css/materialize.css';
import './styles.less';

// create state from initial data.
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
