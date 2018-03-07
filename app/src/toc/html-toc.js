import React from 'react'
import { withRouter } from 'react-router-dom'
import { notStarted, needsWork, done } from './toc-constants'
import TOC from 'elements/TOC'
import WhatIsHTML from 'Home/webdev01/html/WhatIsHTML'
import FirstProject from 'Home/webdev01/html/FirstProject'
import TheDivElement from 'Home/webdev01/html/TheDivElement'
import TheDivElementEx from 'Home/webdev01/html/TheDivElementEx'
import EssentialHTMLElements from 'Home/webdev01/html/EssentialHTMLElements'
import EssentialHTMLElementsEx from 'Home/webdev01/html/EssentialHTMLElementsEx'
import MoreHTML from 'Home/webdev01/html/MoreHTML'
import PraticalMatters from 'Home/webdev01/html/PraticalMatters'

const rootPath = 'html'

export const routes = [
  {
    title: 'HTML',
    type: 'toc',
    path: `/${rootPath}`,
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath={rootPath} pageTitle='HTML' match={match} />),
  },
  {
    status: done,
    title: 'What is HTML?',
    type: 'page',
    path: `/${rootPath}/html-01`,
    component: withRouter(({ match }) => <WhatIsHTML match={match} />),
  },
  {
    status: done,
    title: 'First Project',
    type: 'page',
    path: `/${rootPath}/first-project`,
    component: withRouter(({ match }) => <FirstProject match={match} />),
  },
  {
    status: done,
    title: 'The <div> Element',
    type: 'page',
    path: `/${rootPath}/the-div-element`,
    component: withRouter(({ match }) => <TheDivElement match={match} />),
  },
  {
    status: done,
    title: 'Exercise: The <div> Element',
    type: 'page',
    path: `/${rootPath}/the-div-element-ex`,
    component: withRouter(({ match }) => <TheDivElementEx match={match} />),
  },
  {
    status: done,
    title: 'Essential HTML Elements',
    type: 'page',
    path: `/${rootPath}/essential-html-elements`,
    component: withRouter(({ match }) => <EssentialHTMLElements match={match} />),
  },
  {
    status: done,
    title: 'Exercise: Essential HTML Elements',
    type: 'page',
    path: `/${rootPath}/essential-html-elements-ex`,
    component: withRouter(({ match }) => <EssentialHTMLElementsEx match={match} />),
  },
  {
    status: notStarted,
    title: 'More HTML',
    type: 'page',
    path: `/${rootPath}/more-html`,
    component: withRouter(({ match }) => <MoreHTML match={match} />),
  },
  {
    status: needsWork,
    title: 'Pratical Matters',
    type: 'page',
    path: `/${rootPath}/pratical-matters`,
    component: withRouter(({ match }) => <PraticalMatters match={match} />),
  },
]

export default routes
