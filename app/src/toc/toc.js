import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import htmlTOC from 'toc/html-toc'
import reactTOC from 'toc/react-toc'
import restaurantTOC from 'toc/restaurant-toc'
import jsTOC from 'toc/js-toc'
import configurationTOC from 'toc/configuration-toc'

const homeTOC = [
  // HomeTOC
  {
    title: 'Home',
    type: 'toc',
    path: '/',
    exact: true,
    component: withRouter(() => <TOC rootPath='/' pageTitle='Home' />),
  },
]

export const routes = [...homeTOC, ...htmlTOC, ...reactTOC, ...restaurantTOC, ...jsTOC, ...configurationTOC]

export default routes
