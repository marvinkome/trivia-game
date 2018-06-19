import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const logger = (store) => (next) => (action) => {
    console.log('dispatching', action); // eslint-disable-line
    let result = next(action);
    console.log('next state', store.getState()); // eslint-disable-line
    return result;
};

export default (initialState) =>
    createStore(reducer, initialState, applyMiddleware(logger));
