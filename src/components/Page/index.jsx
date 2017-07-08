// Page
import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import * as actionCreators from '../../store/actions';
import * as selectors from '../../store/selectors';
import MenuItem from './MenuItem'
import Lesson01 from './Lesson01'
import Footer from './Footer'
import './style.css'
import * as ku from '../../lib/ke-utils'

const Page = ({ currentComponentId, updateCurrentComponentId }) => {

  const handleMenuItemClick = (val) => {
    ku.log('handleMenuItemClick: val', val, 'green')
    let newVal;
    val
      ? newVal = val
      : newVal = 0
    updateCurrentComponentId(val)
  }


  let currentComp
  ku.log('currentComponentId', currentComponentId, 'green')
  switch (currentComponentId) {
    case 0:
      currentComp = '0'
      break;
    case 1:
      currentComp = <Lesson01 />
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
      <MenuItem
        id={1}
        itemText='Lesson 1'
        handleMenuItemClick={handleMenuItemClick}
      />
      {currentComp}
      <Footer />
    </div>
  )

}

const mapStateToProps = (state) => {
  let tmp = selectors.getCurrentComponentId(state);
  console.log('tmp', tmp);
  const o = {
    currentComponentId: tmp,
  }
   return o;
}
// export default Page;
export default connect(mapStateToProps, actionCreators)(Page);
