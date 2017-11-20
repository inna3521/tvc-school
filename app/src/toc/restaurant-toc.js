import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
// RestaurantApp
import RA01Introduction from 'Home/react/RestaurantAppTOC/RA01Introduction'
import RA011GettingStarted from 'Home/react/RestaurantAppTOC/RA011GettingStarted'
import RA02Header from 'Home/react/RestaurantAppTOC/RA02Header'
import RA03Nav from 'Home/react/RestaurantAppTOC/RA03Nav'
import RA04Gallery from 'Home/react/RestaurantAppTOC/RA04Gallery'
import RA05Menu from 'Home/react/RestaurantAppTOC/RA05Menu'
import RA06InteractiveNavigation from 'Home/react/RestaurantAppTOC/RA06InteractiveNavigation'
import RA07MenuEdit from 'Home/react/RestaurantAppTOC/RA07MenuEdit'

export const routes = [
  // RestaurantAppTOC
  {
    title: 'Restaurant Application',
    type: 'toc',
    path: '/restaurant-app-toc',
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath='restaurant-app-toc' pageTitle='Restaurant App' match={match} />),
  },
  {
    title: 'Introduction',
    type: 'page',
    path: '/restaurant-app-toc/introduction',
    component: withRouter(({ match }) => <RA01Introduction match={match}/>)
  },
  {
    title: 'Getting Started',
    type: 'page',
    path: '/restaurant-app-toc/getting-started',
    component: withRouter(({ match }) => <RA011GettingStarted match={match} />)
  },
  {
    title: 'Making the Header',
    type: 'page',
    path: '/restaurant-app-toc/header',
    component: withRouter(({ match }) => <RA02Header match={match} />),
  },
  {
    title: 'Navigation',
    type: 'page',
    path: '/restaurant-app-toc/nav',
    component: withRouter(({ match }) => <RA03Nav match={match} />),
  },
  {
    title: 'Gallery',
    type: 'page',
    path: '/restaurant-app-toc/gallery',
    component: withRouter(({ match }) => <RA04Gallery match={match} />),
  },
  {
    title: 'Menu',
    type: 'page',
    path: '/restaurant-app-toc/menu',
    component: withRouter(({ match }) => <RA05Menu match={match} />),
  },
  {
    title: 'Interactive Navigation',
    type: 'page',
    path: '/restaurant-app-toc/interactive-navigation',
    component: withRouter(({ match }) => <RA06InteractiveNavigation match={match} />),
  },
  {
    title: 'Editing the Menu',
    type: 'page',
    path: '/restaurant-app-toc/menu-edit',
    component: withRouter(({ match }) => <RA07MenuEdit match={match} />),
  },
]

export default routes
