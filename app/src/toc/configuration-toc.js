import React from 'react'
import { withRouter } from 'react-router-dom'
import { notStarted, needsWork, done } from './toc-constants'
import TOC from 'elements/TOC'
import InstallingAtom from 'Home/webdev01/configuration/InstallingAtom'

const rootPath = '/configuration'

export const routes = [
  // HTMLTOC
  {
    title: 'Configuration',
    type: 'toc',
    path: rootPath,
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath='configuration' pageTitle='Configuration' match={match} />),
  },
  {
    status: needsWork,
    title: 'Install Atom Code Editor',
    type: 'page',
    path: `${rootPath}/installing-atom`,
    component: withRouter(({ match }) => <InstallingAtom match={match} />),
  },

]

export default routes
