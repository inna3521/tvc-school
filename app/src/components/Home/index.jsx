// Home
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Footer from './Footer'
import TopBar from './TopBar'
import CodeOfConduct from './CodeOfConduct'
import { routes } from 'toc/toc'

const Home = (props) => {

  return (
    <Router>
      <div id="Home">
        <Redirect to='/' />  {/* hopefully this will only run once.*/}
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
}

export default Home
