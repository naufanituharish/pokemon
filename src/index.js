import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// Main App Router and CSS
import App from './app';
import './index.css';

// Root Reducers
import rootReducers from './store/reducers';

import * as serviceWorker from './serviceWorker';

const createStoreMiddleware = createStore(rootReducers, applyMiddleware(thunk, createLogger, promiseMiddleware));

ReactDOM.render(
    <Provider store={createStoreMiddleware}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
