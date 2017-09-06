// Page
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import * as selectors from '../../store/selectors';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MenuItems from './MenuItems'
import L01HTMLElements from './L01HTMLElements'
import L02EssentialHTMLElements from './L02EssentialHTMLElements'
import L03HTMLChallenge01 from './L03HTMLChallenge01'
import L04WhatIsCSS from './L04WhatIsCSS'
import L05CSSChallenge01 from './L05CSSChallenge01'
import Footer from './Footer'
// import styles from './style.css'
import L06JSWhatIsIt from './L06JSWhatIsIt'
import L07JSVariables from './L07JSVariables'
import L08JSArrays from './L08JSArrays'
import L09MozillaThimble from './L09MozillaThimble'
import E01HTML from './E01HTML'
import L10JSOperatorsWithMath from './L10JSOperatorsWithMath'
import L11Functions from './L11Functions'
import L12ControlFlow from './L12ControlFlow'
// import * as ku from '../../lib/ke-utils'
import Pre from '../elements/Pre'
import Code from '../elements/Code'

const Page = () => (

  <Router>
    <div>
      <header>
        <h1 className="green-text">Tri-Valley Coders - SCHOOL</h1>
        <h2>Learn Build Grow Succeed</h2>
      </header>
      <Route path='/01-html-elements' component={L01HTMLElements} />
      <Route path='/02-essential-html-elements' component={L02EssentialHTMLElements} />
      <Route path='/03-html-challenge-1' component={L03HTMLChallenge01} />
      <Route exact path='/' render={() => (
          <MenuItems />
        )} />

      <Footer />
    </div>
  </Router>
)

export default Page
