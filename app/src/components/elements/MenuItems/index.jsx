// MenuItems
import React from 'react'
import styles from './style.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions'
import * as selectors from '../../../store/selectors'
import Link from 'elements/Link'
// import * as ku from 'lib/ke-utils'

const MenuItems = ({ src }) => {
  // ku.log('MenuItems: src', src, 'blue')

  const items = src.map((item, index) => (
    <li key={index}>
      <Link className={styles.linkText}
        to={item.to}
      >
        {item.name}
      </Link></li>
  ))
  // ku.log('MenuItems: items', items, 'blue')
  return (
    <div>
      <h2>Contents</h2>
      <ol>
        {items}
      </ol>
    </div>
  )
}

const mapStateToProps = (state) => {
  const o = {
    currentComponentId: selectors.getCurrentComponentId(state)
  }
  return o
}
export default connect(mapStateToProps, actionCreators)(MenuItems)
