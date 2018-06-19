import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import createStore from './redux/store';
import state from './default-state';
import Home from './home';
import Quiz from './quiz';
import 'materialize-css/dist/css/materialize.css';

const store = createStore(state);
const history = createBrowserHistory();

export const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/quiz" component={Quiz} exact />
            </Switch>
        </Router>
    </Provider>
);
