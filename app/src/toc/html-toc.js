import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
// HTML, CSS, JS
import WhatIsHTML from 'Home/html-css-js/WhatIsHTML'
import EssentialHTMLElements from 'Home/html-css-js/EssentialHTMLElements'
import FirstHTMLPage from 'Home/html-css-js/FirstHTMLPage'
import WhatIsCSS from 'Home/html-css-js/WhatIsCSS'
import CSSChallenge01 from 'Home/html-css-js/CSSChallenge01'
import JSWhatIsIt from 'Home/html-css-js/JSWhatIsIt'
import JSVariables from 'Home/html-css-js/JSVariables'
import Arrays from 'Home/html-css-js/Arrays'
import MozillaThimble from 'Home/html-css-js/MozillaThimble'
import Operators from 'Home/html-css-js/Operators'
import Functions from 'Home/html-css-js/Functions'
import ControlFlow from 'Home/html-css-js/ControlFlow'
import FunctionsTry2 from 'Home/html-css-js/FunctionsTry2'
// import Tables from './html-css-js/Tables'

export const routes = [
  // HTMLTOC
  {
    title: 'HTML',
    type: 'toc',
    path: '/html',
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath='html' pageTitle='html' match={match} />),
  },
  {
    title: 'What is HTML?',
    type: 'page',
    path: '/html/what-is-html',
    component: withRouter(({ match }) => <WhatIsHTML match={match} />),
  },
  {
    title: 'Essential HTML Elements',
    type: 'page',
    path: '/html/essential-html-elements',
    component: withRouter(({ match }) => <EssentialHTMLElements match={match} />),
  },
  {
    title: 'First HTML Page',
    type: 'page',
    path: '/html/first-html-page',
    component: withRouter(({ match }) => <FirstHTMLPage match={match} />),
  },
  {
    title: 'What is CSS',
    type: 'page',
    path: '/html/what-is-css',
    component: withRouter(({ match }) => <WhatIsCSS match={match} />),
  },
  {
    title: 'CSS Challenge',
    type: 'page',
    path: '/html/css-challenge',
    component: withRouter(({ match }) => <CSSChallenge01 match={match} />),
  },
  {
    title: 'JavaScript, What is it?',
    type: 'page',
    path: '/html/js-what-is-it',
    component: withRouter(({ match }) => <JSWhatIsIt match={match} />),
  },
  {
    title: 'JavaScript Variables',
    type: 'page',
    path: '/html/js-variables',
    component: withRouter(({ match }) => <JSVariables match={match} />),
  },
  {
    title: 'Arrays',
    type: 'page',
    path: '/html/arrays',
    component: withRouter(({ match }) => <Arrays match={match} />),
  },
  {
    title: 'Mozilla Thimble',
    type: 'page',
    path: '/html/mozilla-thimble',
    component: withRouter(({ match }) => <MozillaThimble match={match} />),
  },
  {
    title: 'Operators',
    type: 'page',
    path: '/html/operators',
    component: withRouter(({ match }) => <Operators match={match} />),
  },
  {
    title: 'Functions',
    type: 'page',
    path: '/html/functions',
    component: withRouter(({ match }) => <Functions match={match} />),
  },
  {
    title: 'Control Flow',
    type: 'page',
    path: '/html/control-flow',
    component: withRouter(({ match }) => <ControlFlow match={match} />),
  },
  {
    title: 'Functions Try 2',
    type: 'page',
    path: '/html/functions-try-2',
    component: withRouter(({ match }) => <FunctionsTry2 match={match} />),
  },
]

export default routes
