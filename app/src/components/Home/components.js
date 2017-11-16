import React from 'react'
import TOC from 'elements/TOC'
import { homeTOC, reactTOC, htmlCSSJSTOC, restaurantAppTOC } from 'data/menu-items'
import { withRouter } from 'react-router-dom'
import RA01Introduction from './react/RestaurantAppTOC/RA01Introduction'
import RA011GettingStarted from './react/RestaurantAppTOC/RA011GettingStarted'
import RA02Header from './react/RestaurantAppTOC/RA02Header'
import RA03Nav from './react/RestaurantAppTOC/RA03Nav'
import RA04Gallery from './react/RestaurantAppTOC/RA04Gallery'
import RA05Menu from './react/RestaurantAppTOC/RA05Menu'
import RA06InteractiveNavigation from './react/RestaurantAppTOC/RA06InteractiveNavigation'
import RA07MenuEdit from './react/RestaurantAppTOC/RA07MenuEdit'
import Styling from './react/ReactTOC/Styling'
import ModifyProjectStructure from './react/ReactTOC/ModifyProjectStructure'
import InstallConfig from './react/ReactTOC/InstallConfig'
import FirstReactApp from './react/ReactTOC/FirstReactApp'
import FirstReactComponent from './react/ReactTOC/FirstReactComponent'
import PropTypes from './react/ReactTOC/PropTypes'

export const routes = [
  {
    path: '/',
    exact: true,
    component: withRouter(() => <TOC src={homeTOC} />),
  },
  {
    path: '/react-toc',
    exact: true,
    component: withRouter(({ match }) => <TOC src={reactTOC} pageTitle='React' match={match} />),
  },
  {
    path: '/react-toc/styling',
    component: withRouter(({ match }) => <Styling match={match} />),
  },
  {
    path: '/react-toc/modify-project-sturcture',
    component: withRouter(({ match }) => <ModifyProjectStructure match={match} />),
  },
  {
    path: '/react-toc/install-config',
    component: withRouter(({ match }) => <InstallConfig match={match} />),
  },
  {
    path: '/react-toc/first-react-app',
    component: withRouter(({ match }) => <FirstReactApp match={match} />),
  },
  {
    path: '/react-toc/first-react-component',
    component: withRouter(({ match }) => <FirstReactComponent match={match} />),
  },
  {
    path: '/react-toc/prop-types',
    component: withRouter(({ match }) => <PropTypes match={match} />),
  },
  {
    path: '/restaurant-app-toc',
    exact: true,
    component: withRouter(({ match }) => <TOC src={restaurantAppTOC} pageTitle='Restaurant App' match={match} />),
  },
  {
    path: '/restaurant-app-toc/introduction',
    component: withRouter(({ match }) => <RA01Introduction match={match}/>)
  },
  {

    path: '/restaurant-app-toc/getting-started',
    component: withRouter(({ match }) => <RA011GettingStarted match={match} />)
  },
  {
    path: '/restaurant-app-toc/header',
    component: withRouter(({ match }) => <RA02Header match={match} />),
  },
  {
    path: '/restaurant-app-toc/nav',
    component: withRouter(({ match }) => <RA03Nav match={match} />),
  },
  {
    path: '/restaurant-app-toc/gallery',
    component: withRouter(({ match }) => <RA04Gallery match={match} />),
  },
  {
    path: '/restaurant-app-toc/menu',
    component: withRouter(({ match }) => <RA05Menu match={match} />),
  },
  {
    path: '/restaurant-app-toc/interactive-navigation',
    component: withRouter(({ match }) => <RA06InteractiveNavigation match={match} />),
  },
  {
    path: '/restaurant-app-toc/menu-edit',
    component: withRouter(({ match }) => <RA07MenuEdit match={match} />),
  },
]

export default { routes }
