import path from 'path'
import { Server } from 'http'
import Express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchPath } from 'react-router'
import { StaticRouter } from 'react-router-dom'
import { Helmet } from "react-helmet";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from '../client/reducers/root';
import index from './views/index'
import App from '../client/components/App'
import routes from '../client/components/routes'

const app = new Express()
const server = new Server(app)

// Static files folder
app.use(Express.static(path.join(__dirname, '../', 'static')))

// Store
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

// Route
app.get('*', (request, response) => {

    let status = 200

    const matches = routes.reduce((matches, route) => {
        const match = matchPath(request.url, route.path, route)
        if (match && match.isExact) {
            matches.push({
                route,
                match,
                promise: route.component.fetchData ?
                    route.component.fetchData({ store, params: match.params }) : Promise.resolve(null)
            })
        }
        return matches
    }, [])

    if (matches.length === 0) {
        status = 404
    }

    const promises = matches.map((match) =>  {
        return match.promise
    })

    Promise.all(promises).then((...data) => {
        const initialState = store.getState();

        // console.log('initialState.reducerBlogs.length')
        // console.log(initialState.reducerBlogs ? initialState.reducerBlogs.length : 0)

        const context = {}
        const appHtml = renderToString(
            <Provider store={ store } key="provider">
                <StaticRouter context={ context } location={ request.url }>
                    <App />
                </StaticRouter>
            </Provider>
        )

        if (context.url) {
            response.redirect(context.url)
        } else {
            const helmet = Helmet.renderStatic();

            let html = index(helmet, appHtml, initialState)

            return response.status(status).send(html)
        }
    }, (error) => {
        console.error(response, error)
    })
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