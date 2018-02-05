// React
import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import InitialConcepts from 'Home/react/ReactTOC/InitialConcepts'
import Styling from 'Home/react/ReactTOC/Styling'
import ModifyProjectStructure from 'Home/react/ReactTOC/ModifyProjectStructure'
import InstallConfig from 'Home/react/ReactTOC/InstallConfig'
import FirstReactApp from 'Home/react/ReactTOC/FirstReactApp'
import FirstReactComponent from 'Home/react/ReactTOC/FirstReactComponent'
import PropTypes from 'Home/react/ReactTOC/PropTypes'
import JSX from 'Home/react/ReactTOC/JSX'
import ES6React from 'Home/react/ReactTOC/ES6React'
// ReactTOC

export const routes = [
  {
    title: 'React',
    type: 'toc',
    path: '/react-toc',
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath='react-toc' pageTitle='React' match={match} />),
  },
  {
    title: 'Initial Concepts',
    type: 'page',
    path: '/react-toc/initial-concepts',
    component: withRouter(({ match }) => <InitialConcepts match={match} />),
  },
  {
    title: 'ES6 Techniques for React',
    type: 'page',
    path: '/react-toc/es6-react',
    component: withRouter(({ match }) => <ES6React match={match} />),
  },
  {
    title: 'Installation & Configuration',
    type: 'page',
    path: '/react-toc/install-config',
    component: withRouter(({ match }) => <InstallConfig match={match} />),
  },
  {
    title: 'Modifying the Project Structure',
    type: 'page',
    path: '/react-toc/modify-project-sturcture',
    component: withRouter(({ match }) => <ModifyProjectStructure match={match} />),
  },
  {
    title: 'JSX',
    type: 'page',
    path: '/react-toc/jsx',
    component: withRouter(({ match }) => <JSX match={match} />),
  },
  {
    title: 'First React App',
    type: 'page',
    path: '/react-toc/first-react-app',
    component: withRouter(({ match }) => <FirstReactApp match={match} />),
  },
  {
    title: 'First React Component',
    type: 'page',
    path: '/react-toc/first-react-component',
    component: withRouter(({ match }) => <FirstReactComponent match={match} />),
  },
  {
    title: 'Styling React Components',
    type: 'page',
    path: '/react-toc/styling',
    component: withRouter(({ match }) => <Styling match={match} />),
  },
  {
    title: 'Validating Props with PropTypes',
    type: 'page',
    path: '/react-toc/prop-types',
    component: withRouter(({ match }) => <PropTypes match={match} />),
  },
]

export default routes
