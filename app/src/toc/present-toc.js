import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
// HTML, CSS, JS
import C1 from 'Home/present/C1'

// import Tables from './html-css-js/Tables'

export const routes = [
  // HTMLTOC
  {
    title: 'Present',
    type: 'toc',
    path: '/present',
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath='present' pageTitle='Present' match={match} />),
  },
  {
    title: 'C1',
    type: 'page',
    path: '/present/c1',
    component: withRouter(({ match }) => <C1 match={match} />),
  },

]

export default routes
