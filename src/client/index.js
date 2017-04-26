import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App'
import rootReducer from './reducers/root';

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

// Store
const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
    preloadedState
);

const Client = () => (
    <Provider store={ store } key="provider">
        <Router>
            <App />
        </Router>
    </Provider>
)

window.onload = () => {
    render(
        <Client />,
        document.getElementById('app')
    )
}