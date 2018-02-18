import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import FileManagement from 'Home/webdev01/computer-skills/FileManagement'
import UsingAtom from 'Home/webdev01/computer-skills/UsingAtom'

const rootPath = '/computer-skills'

export const routes = [
  {
    title: 'Computer Skills',
    type: 'toc',
    path: rootPath,
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath='computer-skills' pageTitle='Computer Skills' match={match} />),
  },
  {
    title: 'File Management',
    type: 'page',
    path: `${rootPath}/file-management`,
    component: withRouter(({ match }) => <FileManagement match={match} />),
  },
  {
    title: 'Using Atom',
    type: 'page',
    path: `${rootPath}/using-atom`,
    component: withRouter(({ match }) => <UsingAtom match={match} />),
  },
]

export default routes
