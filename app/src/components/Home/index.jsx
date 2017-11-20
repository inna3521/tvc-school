// Home
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Footer'
import TopBar from './TopBar'
import CodeOfConduct from './CodeOfConduct'
import { routes } from './toc'

const Home = (props) => (
  <Router>
    <div>
      <TopBar />
      <Switch>
        {routes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            exact={r.exact}
            component={r.component}
          />
        ))}
        <Route path='/code-of-conduct' component={CodeOfConduct} />
      </Switch>
      <Footer />
    </div>
  </Router>
)

export default Home
