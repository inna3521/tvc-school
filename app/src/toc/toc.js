import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import htmlTOC from 'toc/html-toc'
import reactTOC from 'toc/react-toc'
import restaurantTOC from 'toc/restaurant-toc'
import javascriptTOC from 'toc/javascript-toc'
import configurationTOC from 'toc/configuration-toc'
import computerSkills from 'toc/computer-skills-toc'
// import databaseTOC from 'toc/database-toc'
import cssTOC from './css-toc'
import documentStructureTOC from './document-structure-toc'
import overviewTOC from 'toc/overview-toc'

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

export const routes = [
  ...configurationTOC,
  ...homeTOC,
  ...documentStructureTOC,
  ...overviewTOC,
  ...computerSkills,
  ...htmlTOC,
  ...cssTOC,
  ...javascriptTOC,
  ...reactTOC,
  ...restaurantTOC

]

// export const routes = [...homeTOC, ...htmlTOC, ...reactTOC, ...restaurantTOC, ...jsTOC, ...configurationTOC, ...computerSkills, ...databaseTOC]

export default routes
