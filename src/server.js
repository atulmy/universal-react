import path from 'path'
import { Server } from 'http'
import Express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'

import App from './components/App'

const app = new Express()
const server = new Server(app)

// Use .ejs templates
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Static files folder
app.use(Express.static(path.join(__dirname, 'static')))

// Route
app.get('*', (request, response) => {
    let status = 200
    const context = {};

    let appHtml = renderToString(
        <Router location={ request.url } context={ context } >
            <App />
        </Router>
    )

    // If <Redirect /> was used
    if(context.url) {
        return response.redirect(302, context.url)
    }

    // If router was not matched
    if(context.is404) {
        status = 404
    }

    return response.status(status).render('index', { appHtml })
})

// Start Server
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'production'
server.listen(port, (error) => {
    if(error) {
        return console.error(error)
    } else {
        return console.info(`Server running on http://localhost:${port} [${env}]`)
    }
})