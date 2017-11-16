import React from 'react'
import TOC from 'elements/TOC'
import { homeTOC, reactTOC } from 'data/menu-items'
import { withRouter } from 'react-router-dom'
import RA01Introduction from './react/RestaurantAppTOC/RA01Introduction'
export const routes = [
  {
    path: '/',
    exact: true,
    component: withRouter(() => <TOC src={homeTOC} />),
  },
  {
    path: '/react-toc',
    exact: true,
    component: withRouter(({ match }) => <TOC src={reactTOC} pageTitle='React' match={match}/>),
  },
  {
    path: '/restaurant-app-toc/introduction',
    component: () => <RA01Introduction />
  }
]

export default { routes }
