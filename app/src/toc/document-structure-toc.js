import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
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
    title: 'A Web Page is a Document',
    type: 'page',
    path: `/${rootPath}/webpage-is-document`,
    component: withRouter(({ match }) => <WebPageIsDocument match={match} />),
  },
  {
    title: 'What is an Element',
    type: 'page',
    path: `/${rootPath}/what-is-an-element`,
    component: withRouter(({ match }) => <WhatIsAnElement match={match} />),
  },
  {
    title: 'What Are Styles',
    type: 'page',
    path: `/${rootPath}/what-are-styles`,
    component: withRouter(({ match }) => <WhatAreStyles match={match} />),
  },
  {
    title: 'The Hierarchy of Information',
    subTitle: 'An Exploration of Document Structure',
    type: 'page',
    path: `/${rootPath}/hierarchy-of-information`,
    component: withRouter(({ match }) => <HierarchyOfInformation match={match} />),
  },
  {
    title: 'Exercise: Exploring Document Structure',
    subTitle: 'With Google Docs',
    type: 'page',
    path: `/${rootPath}/ex-exploring-doc-structure`,
    component: withRouter(({ match }) => <ExExploringDocStructure match={match} />),
  },
]

export default routes
