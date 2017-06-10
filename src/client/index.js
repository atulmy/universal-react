// Imports
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { compose } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// App Imports
import App from './components/App'
import rootReducer from './reducers/root'

// Load initial state from server side
const initialState = window.__INITIAL_STATE__
delete window.__INITIAL_STATE__

// Create Store
const store = createStore(
    rootReducer,
    initialState,

    compose(
        applyMiddleware(thunk),
    )
)

const Client = () => (
    <Provider store={ store } key="provider">
        <Router>
            <App />
        </Router>
    </Provider>
)

// Mount app
window.onload = () => {
    render(
        <Client />,
        document.getElementById('app')
    )
}