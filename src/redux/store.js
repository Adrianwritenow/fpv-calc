import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {browserHistory} from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import logger from 'redux-logger';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'


export const history = createHistory()

const middleware = routerMiddleware(history);


// CREATE STORE

const store = createStore(
  combineReducers({
    reducers,
    routing: routerReducer
  }),compose(applyMiddleware(reduxThunk, middleware),window.devToolsExtension ? window.devToolsExtension() : (x) =>x)
);


export {store};
