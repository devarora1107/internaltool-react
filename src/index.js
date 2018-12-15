
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware ,compose} from 'redux'
import './index.css';
import {Provider} from 'react-redux'
import {ConnectedRouter,routerMiddleware} from 'react-router-redux'

import App from './App';
import * as serviceWorker from './serviceWorker';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import {loadState} from './utils/localStorageUtil'
import { Router } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware=createSagaMiddleware()
const initialState={persistedData:loadState()};

const history=createHistory();
const middleWare=routerMiddleware(history)
const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(middleWare,sagaMiddleware)))
store.runSaga =sagaMiddleware.run(rootSaga,store.dispatch)
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
