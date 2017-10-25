// Page
import React from 'react';
import styles from './style.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MenuItems from 'elements/MenuItems'
import { homeMenuItems } from './menu-items'
import Footer from './Footer'
// import L01WhatIsHTML from './html-css-js/L01WhatIsHTML'
// import L02EssentialHTMLElements from './html-css-js/L02EssentialHTMLElements'
// import L03FirstHTMLPage from './html-css-js/L03FirstHTMLPage'
// import L04WhatIsCSS from './html-css-js/L04WhatIsCSS'
// import L05CSSChallenge01 from './html-css-js/L05CSSChallenge01'
// import L06JSWhatIsIt from './html-css-js/L06JSWhatIsIt'
// import L07JSVariables from './html-css-js/L07JSVariables'
// import L08JSArrays from './html-css-js/L08JSArrays'
// import L09MozillaThimble from './html-css-js/L09MozillaThimble'
// import L10JSOperators from './html-css-js/L10JSOperators'
// import L11Functions from './html-css-js/L11Functions'
// import L12ControlFlow from './html-css-js/L12ControlFlow'
// import L13MovingImageIntro from './html-css-js/L13MovingImageIntro'
// import L14FunctionsTry2 from './html-css-js/L14FunctionsTry2'
// import Tables from './html-css-js/Tables'
import ReactTOC from './ReactTOC'
import DevBoxConfig from './ReactTOC/DevBoxConfig'
import FirstReactApp from './ReactTOC/FirstReactApp'
import FirstReactComponent from './ReactTOC/FirstReactComponent'
import ModifyProjectStructure from './ReactTOC/ModifyProjectStructure'
import Styling from './ReactTOC/Styling'
import MenuApp from './ReactTOC/MenuApp'
import MenuAppHeader from './ReactTOC/MenuApp/01MenuAppHeader'
import MenuAppWelcome from './ReactTOC/MenuApp/MenuAppWelcome'
// import * as ku from '../../lib/ke-utils'

const Page = () => (

  <Router>
    <div>
      <header>
        <h1 className={styles.title}>Tri-Valley Coders - SCHOOL</h1>
        <div className={styles.subTitle}>Learn Build Grow Succeed</div>
      </header>
      {/* <Route path='/01-what-is-html' component={L01WhatIsHTML} />
        <Route path='/02-essential-html-elements' component={L02EssentialHTMLElements} />
        <Route path='/03-first-html-page' component={L03FirstHTMLPage} />
        <Route path='/04-css-what-is-it' component={L04WhatIsCSS} />
        <Route path='/05-css-challenge-1' component={L05CSSChallenge01} />
        <Route path='/tables' component={Tables} />
        <Route path='/06-javascript-what-is-it' component={L06JSWhatIsIt} />
        <Route path='/07-javascript-variables' component={L07JSVariables} />
        <Route path='/08-javascript-arrays' component={L08JSArrays} />
        <Route path='/09-mozilla-thimble' component={L09MozillaThimble} />
        <Route path='/10-javascript-operators' component={L10JSOperators} />
        <Route path='/11-javascript-functions' component={L11Functions} />
        <Route path='/12-conditional-control-flow-if' component={L12ControlFlow} />
        <Route path='/13-moving-image-intro' component={L13MovingImageIntro} />
      <Route path='/11-javascript-functions-try-2' component={L14FunctionsTry2} /> */}
      <Route path='/dev-box-config' component={DevBoxConfig} />
      <Route path='/react' component={ReactTOC} />
      <Route path='/react/first-react-app' component={FirstReactApp} />
      <Route path='/react/first-react-component' component={FirstReactComponent} />
      <Route path='/react/modify-project-structure' component={ModifyProjectStructure} />
      <Route path='/react/styling' component={Styling} />
      {/* <Route path='/menu-app' component={MenuApp} /> */}
      <Route path='/react/menu-app/welcome' component={MenuAppWelcome} />
      <Route path='/react/menu-app/header' component={MenuAppHeader} />
      <Route exact path='/' render={() => (
        <div>
          <MenuItems
            src={homeMenuItems}
          />
        </div>
      )} />
      <Route exact path='/menu-app' render={() => (
        <div>
          <MenuApp />
        </div>
      )} />

      <Footer />
    </div>
  </Router>
)

export default Page
