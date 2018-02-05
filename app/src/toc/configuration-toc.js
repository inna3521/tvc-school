import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import InstallingAtom from 'Home/configuration/InstallingAtom'

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
    title: 'Install Atom Code Editor',
    type: 'page',
    path: `${rootPath}/installing-atom`,
    component: withRouter(({ match }) => <InstallingAtom match={match} />),
  },

]

export default routes
