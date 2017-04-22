import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './Layout'
import QuotesListContainer from './QuotesListContainer'
import QuoteDetailContainer from './QuoteDetailContainer'
import NotFound from './NotFound'

const App = (props) => (
    <Layout>
        <Switch>
            <Route exact path="/" component={ QuotesListContainer } />
            <Route exact path="/quote/:id" component={ QuoteDetailContainer } />
            <Route component={ NotFound } />
        </Switch>
    </Layout>
)

export default App