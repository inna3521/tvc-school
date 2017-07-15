// Page
import React from 'react';
import { connect } from 'react-redux';
// import { Component } from 'react';
// import { Grid, Row } from 'react-bootstrap';
import * as actionCreators from '../../store/actions';
import * as selectors from '../../store/selectors';
import MenuItems from './MenuItems'
import Lesson01 from './Lesson01'
import Lesson02 from './Lesson02'
import Lesson03 from './Lesson03'
import Lesson04 from './Lesson04'
import Footer from './Footer'
import './style.css'
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
      currentComp = <Lesson01
        handleMenuItemClick={handleMenuItemClick}
                    />
      break;
    case 2:
      currentComp = <Lesson02
        handleMenuItemClick={handleMenuItemClick}
                    />
        break;
    case 3:
      currentComp = <Lesson03
        handleMenuItemClick={handleMenuItemClick}
                    />
        break;
    case 4:
      currentComp = <Lesson04
        handleMenuItemClick={handleMenuItemClick}
                    />
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
