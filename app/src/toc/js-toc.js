import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import ArrowFunctions from 'Home/js-toc/ArrowFunctions'

export const routes = [
  {
    title: 'JavaScript',
    type: 'toc',
    path: '/js-toc',
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath='js-toc' pageTitle='JavaScript' match={match} />),
  },
  {
    title: 'Arrow Functions',
    type: 'page',
    path: '/js-toc/arrow-functions',
    component: withRouter(({ match }) => <ArrowFunctions match={match} />),
  },
]

export default routes
