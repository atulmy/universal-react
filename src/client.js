import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

const Client = () => (
    <Router>
        <App />
    </Router>
)

window.onload = () => {
    render(
        <Client />,
        document.getElementById('app')
    )
}