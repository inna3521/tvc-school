// Home
import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import Footer from './Footer'
import TopBar from './TopBar'
import PageTitle from './PageTitle'
import CodeOfConduct from './CodeOfConduct'
import { routes } from 'toc/toc'
import TOCOutline from 'elements/TOCOutline'
import MediaQuery from 'react-responsive';

const contentStyle = {
  display: 'flex',
  flexFlow: 'row nowrap',
}
const outlineStyle = {
  paddingRight: 30,
}
const Home = () => {

  return (
    <Router>
      <div id="Home">
        <TopBar />
        <Route render={
            withRouter(({ match, location }) => <PageTitle match={match} location={location} />)
          } />
        <div style={contentStyle}>
          <MediaQuery query="(min-width: 1224px)">
            <div style={outlineStyle}>
              <TOCOutline />
            </div>
          </MediaQuery>
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
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default Home
