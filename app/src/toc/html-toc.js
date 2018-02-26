import React from 'react'
import TOC from 'elements/TOC'
import { withRouter } from 'react-router-dom'
import zzWhatIsHTML from 'Home/webdev01/html/zzWhatIsHTML'
import EssentialHTMLElements from 'Home/webdev01/html/EssentialHTMLElements'
import FirstHTMLPage from 'Home/webdev01/html/FirstHTMLPage'
import WhatIsHTML from 'Home/webdev01/html/WhatIsHTML'
import HTML02 from 'Home/webdev01/html/HTML02'
import E01HTML from 'Home/webdev01/html/E01HTML'
import MozillaThimble from 'Home/webdev01/html/MozillaThimble'
import Tables from 'Home/webdev01/html/Tables'
import ChallengeBirds from 'Home/webdev01/html/ChallengeBirds'
import NewProject from 'Home/webdev01/html/NewProject'
import FirstProject from 'Home/webdev01/html/FirstProject'
import TheMatrix from 'Home/webdev01/html/TheMatrix'
import TheDivElement from 'Home/webdev01/html/TheDivElement'
import TheDivElementEx from 'Home/webdev01/html/TheDivElementEx'

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
    title: 'Project 2: The Matrix',
    type: 'page',
    path: `/${rootPath}/the-matrix`,
    component: withRouter(({ match }) => <TheMatrix match={match} />),
  },
  {
    title: 'merge - E01HTML - What is HTML',
    type: 'page',
    path: `/${rootPath}/e01html`,
    component: withRouter(({ match }) => <E01HTML match={match} />),
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
    component: withRouter(({ match }) => <HTML02 match={match} />),
  },
  {
    title: 'Essential HTML Elements',
    type: 'page',
    path: `/${rootPath}/essential-html-elements`,
    component: withRouter(({ match }) => <EssentialHTMLElements match={match} />),
  },
  {
    title: 'First HTML Page',
    type: 'page',
    path: `/${rootPath}/first-html-page`,
    component: withRouter(({ match }) => <FirstHTMLPage match={match} />),
  },
  {
    title: 'zz-Mozilla Thimble',
    type: 'page',
    path: `/${rootPath}/mozilla-thimble`,
    component: withRouter(({ match }) => <MozillaThimble match={match} />),
  },
  {
    title: 'ab-Tables',
    type: 'page',
    path: `/${rootPath}/html-tables`,
    component: withRouter(({ match }) => <Tables match={match} />),
  },
  {
    title: 'aa-ChallengeBirds',
    type: 'page',
    path: `/${rootPath}/challenge-birds`,
    component: withRouter(({ match }) => <ChallengeBirds match={match} />),
  },
  {
    title: 'zz-NewProject',
    type: 'page',
    path: `/${rootPath}/new-project`,
    component: withRouter(({ match }) => <NewProject match={match} />),
  },
]

export default routes
