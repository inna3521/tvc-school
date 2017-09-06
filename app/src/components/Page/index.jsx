// Page
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import * as selectors from '../../store/selectors';
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

const Page = ({ currentComponentId, updateCurrentComponentId }) => {
  const handleMenuItemClick = (val) => {
    let newVal;
    val === undefined ? newVal = 0 : newVal = val
    // ku.log('handleMenuItemClick: typeof val', typeof val, 'green')
    updateCurrentComponentId(newVal)
  }

  let currentComp
  // ku.log('Page.currentComponentId', currentComponentId, 'green')
  // currentComponentId = 14
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
    case 6:
      currentComp = <L06JSWhatIsIt
        handleMenuItemClick={handleMenuItemClick}
                    />
        break;
    case 7:
      currentComp = <L07JSVariables
        handleMenuItemClick={handleMenuItemClick}
                    />
        break;
    case 8:
      currentComp = <L08JSArrays
        handleMenuItemClick={handleMenuItemClick}
                    />
        break;
    case 9:
      currentComp = <L09MozillaThimble
        handleMenuItemClick={handleMenuItemClick}
                    />
        break;
    case 10:
      currentComp = <E01HTML
        handleMenuItemClick={handleMenuItemClick}
                    />
        break;
    case 11:
      currentComp = <L10JSOperatorsWithMath
        handleMenuItemClick={handleMenuItemClick}
                    />
        break;
    case 12:
      currentComp = <L11Functions
        handleMenuItemClick={handleMenuItemClick}
                    />
        break;
    case 13:
      currentComp = <L12ControlFlow
        handleMenuItemClick={handleMenuItemClick}
                    />
        break;
    default:
      currentComp = 'default'
      console.log('error: we got to default case')
  }
  return (
    <div>
      <Code
        code={[
          '<img>'
        ]}
        html
      />
      <header>
        <h1 className="green-text">Tri-Valley Coders - SCHOOL</h1>
        <h2>Learn Build Grow Succeed</h2>
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
