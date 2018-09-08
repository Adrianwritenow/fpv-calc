import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {routerReducer, routerMiddleware } from 'react-router-redux';
import reduxThunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers'


export const history = createHistory();

const middleware = routerMiddleware(history);


// CREATE STORE

const store = createStore(
  combineReducers({
    // reducers,
    routing: routerReducer
  }),compose(applyMiddleware(reduxThunk, middleware),window.devToolsExtension ? window.devToolsExtension() : (x) =>x)
);


export {store};
