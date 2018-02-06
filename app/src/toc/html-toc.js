import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import WhatIsHTML from 'Home/html/WhatIsHTML'
import EssentialHTMLElements from 'Home/html/EssentialHTMLElements'
import FirstHTMLPage from 'Home/html/FirstHTMLPage'
import HTML01 from 'Home/html/HTML01'

const rootPath = '/html'

export const routes = [
  {
    title: 'HTML',
    type: 'toc',
    path: rootPath,
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath='html' pageTitle='HTML' match={match} />),
  },
  {
    title: 'HTML 01?',
    type: 'page',
    path: `${rootPath}/html-01`,
    component: withRouter(({ match }) => <HTML01 match={match} />),
  },
  {
    title: 'What is HTML?',
    type: 'page',
    path: `${rootPath}/what-is-html`,
    component: withRouter(({ match }) => <WhatIsHTML match={match} />),
  },
  {
    title: 'Essential HTML Elements',
    type: 'page',
    path: `${rootPath}/essential-html-elements`,
    component: withRouter(({ match }) => <EssentialHTMLElements match={match} />),
  },
  {
    title: 'First HTML Page',
    type: 'page',
    path: `${rootPath}/first-html-page`,
    component: withRouter(({ match }) => <FirstHTMLPage match={match} />),
  },
]

export default routes
