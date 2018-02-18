import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import FileManagement from 'Home/webdev01/computer-skills/FileManagement'
import UsingAtom from 'Home/webdev01/computer-skills/UsingAtom'
import InstallingSoftware from 'Home/webdev01/computer-skills/InstallingSoftware'
import CreateAProject from 'Home/webdev01/computer-skills/CreateAProject'

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
    title: 'Installing Software',
    type: 'page',
    path: `${rootPath}/installing-software`,
    component: withRouter(({ match }) => <InstallingSoftware match={match} />),
  },
  {
    title: 'Using Atom',
    type: 'page',
    path: `${rootPath}/using-atom`,
    component: withRouter(({ match }) => <UsingAtom match={match} />),
  },
  {
    title: 'Creating A Project',
    type: 'page',
    path: `${rootPath}/create-project`,
    component: withRouter(({ match }) => <CreateAProject match={match} />),
  },
]

export default routes
