import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
// React
import Styling from './react/ReactTOC/Styling'
import ModifyProjectStructure from './react/ReactTOC/ModifyProjectStructure'
import InstallConfig from './react/ReactTOC/InstallConfig'
import FirstReactApp from './react/ReactTOC/FirstReactApp'
import FirstReactComponent from './react/ReactTOC/FirstReactComponent'
import PropTypes from './react/ReactTOC/PropTypes'
// RestaurantApp
import RA01Introduction from './react/RestaurantAppTOC/RA01Introduction'
import RA011GettingStarted from './react/RestaurantAppTOC/RA011GettingStarted'
import RA02Header from './react/RestaurantAppTOC/RA02Header'
import RA03Nav from './react/RestaurantAppTOC/RA03Nav'
import RA04Gallery from './react/RestaurantAppTOC/RA04Gallery'
import RA05Menu from './react/RestaurantAppTOC/RA05Menu'
import RA06InteractiveNavigation from './react/RestaurantAppTOC/RA06InteractiveNavigation'
import RA07MenuEdit from './react/RestaurantAppTOC/RA07MenuEdit'
// HTML, CSS, JS
// import L01WhatIsHTML from './html-css-js/L01WhatIsHTML'
// import L02EssentialHTMLElements from './html-css-js/L02EssentialHTMLElements'
// import L03FirstHTMLPage from './html-css-js/L03FirstHTMLPage'
// import L04WhatIsCSS from './html-css-js/L04WhatIsCSS'
// import L05CSSChallenge01 from './html-css-js/L05CSSChallenge01'
// import L06JSWhatIsIt from './html-css-js/L06JSWhatIsIt'
// import L07JSVariables from './html-css-js/L07JSVariables'
// import L08JSArrays from './html-css-js/L08JSArrays'
// import L09MozillaThimble from './html-css-js/L09MozillaThimble'
// import L10JSOperators from './html-css-js/L10JSOperators'
// import L11Functions from './html-css-js/L11Functions'
// import L12ControlFlow from './html-css-js/L12ControlFlow'
// import L13MovingImageIntro from './html-css-js/L13MovingImageIntro'
// import L14FunctionsTry2 from './html-css-js/L14FunctionsTry2'
// import Tables from './html-css-js/Tables'

export const routes = [
  // HomeTOC
  {
    name: 'Home',
    type: 'root',
    path: '/',
    exact: true,
    component: withRouter(() => <TOC rootPath='/' pageTitle='Home' />),
  },
  // ReactTOC
  {
    name: 'React',
    type: 'toc',
    path: '/react-toc',
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath='react-toc' pageTitle='React' match={match} />),
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
  // RestaurantAppTOC
  {
    name: 'Restaurant Application',
    type: 'toc',
    path: '/restaurant-app-toc',
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath='restaurant-app-toc' pageTitle='Restaurant App' match={match} />),
  },
  {
    name: 'Introduction',
    type: 'page',
    path: '/restaurant-app-toc/introduction',
    component: withRouter(({ match }) => <RA01Introduction match={match}/>)
  },
  {
    name: 'Getting Started',
    type: 'page',
    path: '/restaurant-app-toc/getting-started',
    component: withRouter(({ match }) => <RA011GettingStarted match={match} />)
  },
  {
    name: 'Making the Header',
    type: 'page',
    path: '/restaurant-app-toc/header',
    component: withRouter(({ match }) => <RA02Header match={match} />),
  },
  {
    name: 'Navigation',
    type: 'page',
    path: '/restaurant-app-toc/nav',
    component: withRouter(({ match }) => <RA03Nav match={match} />),
  },
  {
    name: 'Gallery',
    type: 'page',
    path: '/restaurant-app-toc/gallery',
    component: withRouter(({ match }) => <RA04Gallery match={match} />),
  },
  {
    name: 'Menu',
    type: 'page',
    path: '/restaurant-app-toc/menu',
    component: withRouter(({ match }) => <RA05Menu match={match} />),
  },
  {
    name: 'Interactive Navigation',
    type: 'page',
    path: '/restaurant-app-toc/interactive-navigation',
    component: withRouter(({ match }) => <RA06InteractiveNavigation match={match} />),
  },
  {
    name: 'Editing the Menu',
    type: 'page',
    path: '/restaurant-app-toc/menu-edit',
    component: withRouter(({ match }) => <RA07MenuEdit match={match} />),
  },
]

export default routes
