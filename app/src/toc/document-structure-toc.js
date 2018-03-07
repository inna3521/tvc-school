import React from 'react'
import { withRouter } from 'react-router-dom'
import TOC from 'elements/TOC'
import { notStarted } from './toc-constants'
import WebPageIsDocument from 'Home/webdev01/document-structure/WebPageIsDocument'
import WhatIsAnElement from 'Home/webdev01/document-structure/WhatIsAnElement'
import WhatAreStyles from 'Home/webdev01/document-structure/WhatAreStyles'
import HierarchyOfInformation from 'Home/webdev01/document-structure/HierarchyOfInformation'
import ExExploringDocStructure from 'Home/webdev01/document-structure/ExExploringDocStructure'
// react-router root path
const rootPath = 'webdev01'

export const routes = [
  {
    title: 'Document Structure',
    type: 'toc',
    path: `/${rootPath}`,
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath={rootPath} pageTitle='Document Structure' match={match} />),
  },
  {
    status: notStarted,
    title: 'A Web Page is a Document',
    type: 'page',
    path: `/${rootPath}/webpage-is-document`,
    component: withRouter(({ match }) => <WebPageIsDocument match={match} />),
  },
  {
    status: notStarted,
    title: 'What is an Element',
    type: 'page',
    path: `/${rootPath}/what-is-an-element`,
    component: withRouter(({ match }) => <WhatIsAnElement match={match} />),
  },
  {
    status: notStarted,
    title: 'What Are Styles',
    type: 'page',
    path: `/${rootPath}/what-are-styles`,
    component: withRouter(({ match }) => <WhatAreStyles match={match} />),
  },
  {
    status: notStarted,
    title: 'The Hierarchy of Information',
    subTitle: 'An Exploration of Document Structure',
    type: 'page',
    path: `/${rootPath}/hierarchy-of-information`,
    component: withRouter(({ match }) => <HierarchyOfInformation match={match} />),
  },
  {
    status: notStarted,
    title: 'Exercise: Exploring Document Structure',
    subTitle: 'With Google Docs',
    type: 'page',
    path: `/${rootPath}/ex-exploring-doc-structure`,
    component: withRouter(({ match }) => <ExExploringDocStructure match={match} />),
  },
]

export default routes
