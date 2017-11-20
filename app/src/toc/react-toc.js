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
// ReactTOC
export const routes = [
  {
    name: 'React',
    type: 'toc',
    path: '/react-toc',
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath='react-toc' pageTitle='React' match={match} />),
  },
  {
    name: 'Initial Concepts',
    type: 'page',
    path: '/react-toc/initial-concepts',
    component: withRouter(({ match }) => <InitialConcepts match={match} />),
  },
  {
    name: 'Styling React Components',
    type: 'page',
    path: '/react-toc/styling',
    component: withRouter(({ match }) => <Styling match={match} />),
  },
  {
    name: 'Modifying the Project Structure',
    type: 'page',
    path: '/react-toc/modify-project-sturcture',
    component: withRouter(({ match }) => <ModifyProjectStructure match={match} />),
  },
  {
    name: 'Installation & Configuration',
    type: 'page',
    path: '/react-toc/install-config',
    component: withRouter(({ match }) => <InstallConfig match={match} />),
  },
  {
    name: 'First React App',
    type: 'page',
    path: '/react-toc/first-react-app',
    component: withRouter(({ match }) => <FirstReactApp match={match} />),
  },
  {
    name: 'First React Component',
    type: 'page',
    path: '/react-toc/first-react-component',
    component: withRouter(({ match }) => <FirstReactComponent match={match} />),
  },
  {
    name: 'Validating Props with PropTypes',
    type: 'page',
    path: '/react-toc/prop-types',
    component: withRouter(({ match }) => <PropTypes match={match} />),
  },
]

export default routes
