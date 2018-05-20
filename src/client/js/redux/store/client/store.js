import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
import allReducers from '_reducers/index';
/* Our default state object */
const loggerSettings = {
  warning: () => false
};
const middleWare = composeWithDevTools(applyMiddleware(promise(), thunk, createLogger(loggerSettings)));

// Creates the Redux store with our middleware and state.
export const configureStore = (state) => {
    const store = middleWare(createStore)(allReducers, state);
    return store;
};