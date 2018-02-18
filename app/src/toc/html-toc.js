import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import WhatIsHTML from 'Home/webdev01/html/WhatIsHTML'
import EssentialHTMLElements from 'Home/webdev01/html/EssentialHTMLElements'
import FirstHTMLPage from 'Home/webdev01/html/FirstHTMLPage'
import HTML01 from 'Home/webdev01/html/HTML01'
import HTML02 from 'Home/webdev01/html/HTML02'

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
    title: 'Introduction to HTML',
    type: 'page',
    path: `${rootPath}/html-01`,
    component: withRouter(({ match }) => <HTML01 match={match} />),
  },
  {
    title: 'HTML Elements',
    type: 'page',
    path: `${rootPath}/html-02`,
    component: withRouter(({ match }) => <HTML02 match={match} />),
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
