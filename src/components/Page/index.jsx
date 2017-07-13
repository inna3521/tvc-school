// Page
import React from 'react';
import { connect } from 'react-redux';
// import { Component } from 'react';
// import { Grid, Row } from 'react-bootstrap';
import * as actionCreators from '../../store/actions';
import * as selectors from '../../store/selectors';
import MenuItems from './MenuItems'
import Lesson01 from './Lesson01'
import Footer from './Footer'
import './style.css'
import * as ku from '../../lib/ke-utils'

const Page = ({ currentComponentId, updateCurrentComponentId }) => {
  const handleMenuItemClick = (val) => {
    val === undefined ? val = 0 : val = val
    ku.log('handleMenuItemClick: typeof val', typeof val, 'green')
    updateCurrentComponentId(val)
  }

  let currentComp
  ku.log('Page.currentComponentId', currentComponentId, 'green')
  switch (currentComponentId) {
    case 0:
      currentComp = <MenuItems
        handleMenuItemClick={handleMenuItemClick}
                    />
      break;
    case 1:
      currentComp = <Lesson01
        handleMenuItemClick={handleMenuItemClick}
                    />
      break;
    case 2:
      currentComp = '2'
      break;
    default:
      currentComp = 'default'
      console.log('error: we got to default case')
  }
  return (
    <div className='page-wrapper'>
      <header>
        <h1 className='green-text site-title'>Tri-Valley Coders</h1>
        <h2 className='section-sub-title header-text'>Learn Build Grow Succeed</h2>
        <blockquote>The magic of Tri-Valley Coders School is the individual and in-person contact will skilled software developers.</blockquote>
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
