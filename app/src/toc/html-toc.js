import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import WhatIsHTML from 'Home/webdev01/html/WhatIsHTML'
import FirstProject from 'Home/webdev01/html/FirstProject'
import TheDivElement from 'Home/webdev01/html/TheDivElement'
import TheDivElementEx from 'Home/webdev01/html/TheDivElementEx'
import EssentialHTMLElements from 'Home/webdev01/html/EssentialHTMLElements'
import TheMatrix from 'Home/webdev01/html/TheMatrix'

import zzHTML02 from 'Home/webdev01/html/zzHTML02'
import zzE01HTML from 'Home/webdev01/html/zzE01HTML'
import xxMozillaThimble from 'Home/webdev01/html/xxMozillaThimble'
import zzTables from 'Home/webdev01/html/zzTables'
import zzChallengeBirds from 'Home/webdev01/html/zzChallengeBirds'
// import xxNewProject from 'Home/webdev01/html/xxNewProject'
import zzFirstHTMLPage from 'Home/webdev01/html/zzFirstHTMLPage'
import zzWhatIsHTML from 'Home/webdev01/html/zzWhatIsHTML'

const rootPath = 'html'

export const routes = [
  {
    title: 'HTML',
    type: 'toc',
    path: `/${rootPath}`,
    exact: true,
    component: withRouter(({ match }) => <TOC rootPath={rootPath} pageTitle='HTML' match={match} />),
  },
  {
    title: 'What is HTML?',
    type: 'page',
    path: `/${rootPath}/html-01`,
    component: withRouter(({ match }) => <WhatIsHTML match={match} />),
  },
  {
    title: 'First Project',
    type: 'page',
    path: `/${rootPath}/first-project`,
    component: withRouter(({ match }) => <FirstProject match={match} />),
  },
  {
    title: 'The <div> Element',
    type: 'page',
    path: `/${rootPath}/the-div-element`,
    component: withRouter(({ match }) => <TheDivElement match={match} />),
  },
  {
    title: 'Exercise: The <div> Element',
    type: 'page',
    path: `/${rootPath}/the-div-element-ex`,
    component: withRouter(({ match }) => <TheDivElementEx match={match} />),
  },
  {
    title: 'Essential HTML Elements',
    type: 'page',
    path: `/${rootPath}/essential-html-elements`,
    component: withRouter(({ match }) => <EssentialHTMLElements match={match} />),
  },
  {
    title: 'Project 2: The Matrix',
    type: 'page',
    path: `/${rootPath}/the-matrix`,
    component: withRouter(({ match }) => <TheMatrix match={match} />),
  },
  {
    title: 'merge - E01HTML - What is HTML',
    type: 'page',
    path: `/${rootPath}/e01html`,
    component: withRouter(({ match }) => <zzE01HTML match={match} />),
  },
  {
    title: 'merge - What is HTML?',
    type: 'page',
    path: `/${rootPath}/what-is-html`,
    component: withRouter(({ match }) => <zzWhatIsHTML match={match} />),
  },
  {
    title: 'merge - HTML02 - HTML Elements',
    type: 'page',
    path: `/${rootPath}/html-02`,
    component: withRouter(({ match }) => <zzHTML02 match={match} />),
  },

  {
    title: 'First HTML Page',
    type: 'page',
    path: `/${rootPath}/first-html-page`,
    component: withRouter(({ match }) => <zzFirstHTMLPage match={match} />),
  },
  {
    title: 'zz-Mozilla Thimble',
    type: 'page',
    path: `/${rootPath}/mozilla-thimble`,
    component: withRouter(({ match }) => <xxMozillaThimble match={match} />),
  },
  {
    title: 'ab-Tables',
    type: 'page',
    path: `/${rootPath}/html-tables`,
    component: withRouter(({ match }) => <zzTables match={match} />),
  },
  {
    title: 'aa-ChallengeBirds',
    type: 'page',
    path: `/${rootPath}/challenge-birds`,
    component: withRouter(({ match }) => <zzChallengeBirds match={match} />),
  },
  {
    title: 'zz-NewProject',
    type: 'page',
    path: `/${rootPath}/new-project`,
    component: withRouter(({ match }) => <zzNewProject match={match} />),
  },
]

export default routes
