// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// App Imports
import routes from '../setup/routes'
import Layout from './common/Layout'
import NotFound from './common/NotFound'

const App = () => (
  <Layout>
    <Switch>
      {routes.map((route, index) => (
        // pass in the initialData from the server for this specific route
        <Route {...route} key={index}/>
      ))}

      <Route component={NotFound}/>
    </Switch>
  </Layout>
)

export default App
