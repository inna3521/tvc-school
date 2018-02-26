import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import WhatIsCSS from 'Home/webdev01/css/WhatIsCSS'
import WhatIsCSSEx from 'Home/webdev01/css/WhatIsCSSEx'
import CSSChallenge01 from 'Home/webdev01/css/CSSChallenge01'

const rootPath = '/css'

export const routes = [
  {
    title: 'CSS',
    type: 'toc',
    path: rootPath,
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath='css' pageTitle='CSS' match={match} />),
  },
  {
    title: 'What is CSS',
    type: 'page',
    path: `${rootPath}/what-is-css`,
    component: withRouter(({ match }) => <WhatIsCSS match={match} />),
  },
  {
    title: 'Exercise: What is CSS',
    type: 'page',
    path: `${rootPath}/what-is-css-ex`,
    component: withRouter(({ match }) => <WhatIsCSSEx match={match} />),
  },
  {
    title: 'CSS Challenge',
    type: 'page',
    path: `${rootPath}/css-challenge`,
    component: withRouter(({ match }) => <CSSChallenge01 match={match} />),
  },
]

export default routes
