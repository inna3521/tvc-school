// Page
import React from 'react';
import { connect } from 'react-redux';
// import { Component } from 'react';
// import { Grid, Row } from 'react-bootstrap';
import * as actionCreators from '../../store/actions';
import * as selectors from '../../store/selectors';
import MenuItems from './MenuItems'
import L01HTMLElements from './L01HTMLElements'
import L02EssentialHTMLElements from './L02EssentialHTMLElements'
import L03HTMLChallenge01 from './L03HTMLChallenge01'
import L04WhatIsCSS from './L04WhatIsCSS'
import L05CSSChallenge01 from './L05CSSChallenge01'
// import P01NewProject from './P01NewProject'
import Footer from './Footer'
import './style.css'
import L06JSWhatIsIt from './L06JSWhatIsIt'
import L07JSVariables from './L07JSVariables'
import L08JSArrays from './L08JSArrays'
import L09MozillaThimble from './L09MozillaThimble'
// import * as ku from '../../lib/ke-utils'

const Page = ({ currentComponentId, updateCurrentComponentId }) => {
  const handleMenuItemClick = (val) => {
    let newVal;
    val === undefined ? newVal = 0 : newVal = val
    // ku.log('handleMenuItemClick: typeof val', typeof val, 'green')
    updateCurrentComponentId(newVal)
  }

  let currentComp
  // ku.log('Page.currentComponentId', currentComponentId, 'green')
  switch (currentComponentId) {
    case 0:
      currentComp = <MenuItems
        handleMenuItemClick={handleMenuItemClick}
                    />
      break;
    case 1:
      currentComp = <L01HTMLElements
        handleMenuItemClick={handleMenuItemClick}
                    />
      break;
    case 2:
      currentComp = <L02EssentialHTMLElements
        handleMenuItemClick={handleMenuItemClick}
                    />
        break;
    case 3:
      currentComp = <L03HTMLChallenge01
        handleMenuItemClick={handleMenuItemClick}
                    />
        break;
    case 4:
      currentComp = <L04WhatIsCSS
        handleMenuItemClick={handleMenuItemClick}
                    />
        break;
    case 5:
      currentComp = <L05CSSChallenge01
        handleMenuItemClick={handleMenuItemClick}
                    />
        break;
    default:
      currentComp = 'default'
      console.log('error: we got to default case')
  }
  return (
    <div className='page-wrapper'>

      {/* <L06JSWhatIsIt /> */}
      <L09MozillaThimble />
      <header>
        <h1 className='green-text site-title'>Tri-Valley Coders</h1>
        <h2 className='section-sub-title header-text'>Learn Build Grow Succeed</h2>
      </header>
      {currentComp}
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  const o = {
    currentComponentId: selectors.getCurrentComponentId(state)
  }
  return o
}

export default connect(mapStateToProps, actionCreators)(Page)
