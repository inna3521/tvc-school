import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import Introduction from 'Home/database/Introduction'

export const routes = [
  {
    title: 'Database',
    type: 'toc',
    path: '/database',
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath='database' pageTitle='Database' match={match} />),
  },
  {
    title: 'Introduction',
    type: 'page',
    path: '/database/introduction',
    component: withRouter(({ match }) => <Introduction match={match} />),
  },
  // {
  //   title: 'Using Atom',
  //   type: 'page',
  //   path: '/computer-skills/using-atom',
  //   component: withRouter(({ match }) => <UsingAtom match={match} />),
  // },
]

export default routes
