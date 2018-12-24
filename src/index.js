import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import 'tachyons';

import App from './containers/App';

import { requestRobots, searchRobots } from './reducers'

import * as serviceWorker from './serviceWorker';


//const store = createStore(searchRobots);

const logger = createLogger();

const rootReducers = combineReducers({ searchRobots, requestRobots });

// the following line didn't work when passing only the single reducer dfirectly
// this ia because with a single reducer, state.REDUCER.field doesn't exist, it has to be 
// state.field
//const store = createStore(rootReducers, applyMiddleware(logger));
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
