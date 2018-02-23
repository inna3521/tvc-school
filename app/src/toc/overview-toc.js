import React from 'react'
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
    title: 'Defining Content',
    type: 'page',
    path: `${rootPath}/`,
    component: withRouter(({ match }) => <DefiningContent match={match} />),
  },
  {
    title: "So What's Structure",
    type: 'page',
    path: `${rootPath}/`,
    component: withRouter(({ match }) => <WhatIsStructure match={match} />),
  },
  {
    title: 'HTML: Structure is Created with HTML',
    type: 'page',
    path: `${rootPath}/`,
    component: withRouter(({ match }) => <StructureHTML match={match} />),
  },
  {
    title: 'CSS: Styles are Created with CSS',
    type: 'page',
    path: `${rootPath}/`,
    component: withRouter(({ match }) => <StyleCSS match={match} />),
  },
  {
    title: 'JavaScript&colon; Interactivity is provided by JavaScript',
    type: 'page',
    path: `${rootPath}/`,
    component: withRouter(({ match }) => <InteractivityJS match={match} />),
  },
  {
    title: 'Exercise: Write Som HTML & CSS',
    type: 'page',
    path: `${rootPath}/`,
    component: withRouter(({ match }) => <ExWriteSomeHTMLCSSJS match={match} />),
  },

]

export default routes
