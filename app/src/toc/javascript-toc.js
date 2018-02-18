import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import JSWhatIsIt from 'Home/webdev01/javascript/JSWhatIsIt'
import JSVariables from 'Home/webdev01/javascript/JSVariables'
import Arrays from 'Home/webdev01/javascript/Arrays'
import Operators from 'Home/webdev01/javascript/Operators'
import Functions from 'Home/webdev01/javascript/Functions'
import ControlFlow from 'Home/webdev01/javascript/ControlFlow'
import FunctionsTry2 from 'Home/webdev01/javascript/FunctionsTry2'
import ArrowFunctions from 'Home/webdev01/javascript/ArrowFunctions'

const rootPath = '/javascript'

export const routes = [
  {
    title: 'JavaScript',
    type: 'toc',
    path: rootPath,
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath='javascript' pageTitle='JavaScript' match={match} />),
  },
  {
    title: 'JavaScript, What is it?',
    type: 'page',
    path: `${rootPath}/js-what-is-it`,
    component: withRouter(({ match }) => <JSWhatIsIt match={match} />),
  },
  {
    title: 'JavaScript Variables',
    type: 'page',
    path: `${rootPath}/js-variables`,
    component: withRouter(({ match }) => <JSVariables match={match} />),
  },
  {
    title: 'Arrays',
    type: 'page',
    path: `${rootPath}/arrays`,
    component: withRouter(({ match }) => <Arrays match={match} />),
  },
  {
    title: 'Operators',
    type: 'page',
    path: `${rootPath}/operators`,
    component: withRouter(({ match }) => <Operators match={match} />),
  },
  {
    title: 'Functions',
    type: 'page',
    path: `${rootPath}/functions`,
    component: withRouter(({ match }) => <Functions match={match} />),
  },
  {
    title: 'Control Flow',
    type: 'page',
    path: `${rootPath}/control-flow`,
    component: withRouter(({ match }) => <ControlFlow match={match} />),
  },
  {
    title: 'Functions Try 2',
    type: 'page',
    path: `${rootPath}/functions-try-2`,
    component: withRouter(({ match }) => <FunctionsTry2 match={match} />),
  },
  {
    title: 'Arrow Functions',
    type: 'page',
    path: `${rootPath}/arrow-functions`,
    component: withRouter(({ match }) => <ArrowFunctions match={match} />),
  },
]

export default routes
