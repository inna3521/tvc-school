import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'

import htmlTOC from 'toc/html-toc'
import reactTOC from 'toc/react-toc'
import restaurantTOC from 'toc/restaurant-toc'

const homeTOC = [
  // HomeTOC
  {
    name: 'Home',
    type: 'root',
    path: '/',
    exact: true,
    component: withRouter(() => <TOC rootPath='/' pageTitle='Home' />),
  },
]

const tmp = []
export const routes = tmp.concat(homeTOC, htmlTOC, reactTOC, restaurantTOC)

export default routes
