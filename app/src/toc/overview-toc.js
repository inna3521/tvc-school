import React from 'react'
import { notStarted } from './toc-constants'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import ExWriteSomeHTMLCSSJS from 'Home/webdev01/overview/ExWriteSomeHTMLCSSJS'
import DefiningContent from 'Home/webdev01/overview/DefiningContent'
import WhatIsStructure from 'Home/webdev01/overview/WhatIsStructure'
import StructureHTML from 'Home/webdev01/overview/StructureHTML'
import StyleCSS from 'Home/webdev01/overview/StyleCSS'
import InteractivityJS from 'Home/webdev01/overview/InteractivityJS'

const rootPath = 'overview'

export const routes = [
  // HTMLTOC
  {
    title: 'Overview: HTML, CSS & JavaScript',
    subTitle: 'Demo & Discussion',
    type: 'toc',
    path: `/${rootPath}`,
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath={rootPath} pageTitle='Overview: HTML, CSS & JavaScript' match={match} />),
  },
  {
    status: notStarted,
    title: 'Defining Content',
    type: 'page',
    path: `/${rootPath}/defining-content`,
    component: withRouter(({ match }) => <DefiningContent match={match} />),
  },
  {
    status: notStarted,
    title: "So What's Structure",
    type: 'page',
    path: `/${rootPath}/so-whats-structure`,
    component: withRouter(({ match }) => <WhatIsStructure match={match} />),
  },
  {
    status: notStarted,
    title: 'HTML: Structure is Created with HTML',
    type: 'page',
    path: `/${rootPath}/html-structure-is-created-with-html`,
    component: withRouter(({ match }) => <StructureHTML match={match} />),
  },
  {
    status: notStarted,
    title: 'CSS: Styles are Created with CSS',
    type: 'page',
    path: `/${rootPath}/css-styles-are-created-with-css`,
    component: withRouter(({ match }) => <StyleCSS match={match} />),
  },
  {
    status: notStarted,
    title: 'JavaScript&colon; Interactivity is provided by JavaScript',
    type: 'page',
    path: `/${rootPath}/javascript-interactivity-is-provided-by-javascript`,
    component: withRouter(({ match }) => <InteractivityJS match={match} />),
  },
  {
    status: notStarted,
    title: 'Exercise: Write Some HTML & CSS',
    type: 'page',
    path: `/${rootPath}/ex-write-some-html-and-css`,
    component: withRouter(({ match }) => <ExWriteSomeHTMLCSSJS match={match} />),
  },

]

export default routes
