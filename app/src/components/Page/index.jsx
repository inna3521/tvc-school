// Page
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import * as selectors from '../../store/selectors';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MenuItems from './MenuItems'
import L01WhatIsHTML from './L01WhatIsHTML'
import L02EssentialHTMLElements from './L02EssentialHTMLElements'
// import L03HTMLChallenge01 from './L03HTMLChallenge01'
import L03FirstHTMLPage from './L03FirstHTMLPage'
import L04WhatIsCSS from './L04WhatIsCSS'
import L05CSSChallenge01 from './L05CSSChallenge01'
import Footer from './Footer'
// import styles from './style.css'
import L06JSWhatIsIt from './L06JSWhatIsIt'
import L07JSVariables from './L07JSVariables'
import L08JSArrays from './L08JSArrays'
import L09MozillaThimble from './L09MozillaThimble'
import L10JSOperators from './L10JSOperators'
import L11Functions from './L11Functions'
import L12ControlFlow from './L12ControlFlow'
import L13MovingImageIntro from './L13MovingImageIntro'
import L14FunctionsTry2 from './L14FunctionsTry2'
// import * as ku from '../../lib/ke-utils'



const Page = () => (

  <Router>
    <div>
      <header>
        <h1 className="green-text">Tri-Valley Coders - SCHOOL</h1>
        <h3>Learn Build Grow Succeed</h3>
      </header>
      <Route path='/01-what-is-html' component={L01WhatIsHTML} />
      <Route path='/02-essential-html-elements' component={L02EssentialHTMLElements} />
      <Route path='/03-first-html-page' component={L03FirstHTMLPage} />
      <Route path='/04-css-what-is-it' component={L04WhatIsCSS} />
      <Route path='/05-css-challenge-1' component={L05CSSChallenge01} />
      <Route path='/06-javascript-what-is-it' component={L06JSWhatIsIt} />
      <Route path='/07-javascript-variables' component={L07JSVariables} />
      <Route path='/08-javascript-arrays' component={L08JSArrays} />
      <Route path='/09-mozilla-thimble' component={L09MozillaThimble} />
      <Route path='/10-javascript-operators' component={L10JSOperators} />
      <Route path='/11-javascript-functions' component={L11Functions} />
      <Route path='/12-conditional-control-flow-if' component={L12ControlFlow} />
      <Route path='/13-moving-image-intro' component={L13MovingImageIntro} />
      <Route path='/11-javascript-functions-try-2' component={L14FunctionsTry2} />
      <Route exact path='/' render={() => (
        <MenuItems />
      )} />

      <Footer />
    </div>
  </Router>
)

export default Page
