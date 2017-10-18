// MenuItems
import React from 'react'
import styles from './style.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions'
import * as selectors from '../../../store/selectors'
import { Link } from 'react-router-dom'
import menuItems from './menu-items'

import * as ku from '../../../lib/ke-utils'

const MenuItems = (props) => {
  ku.log('menuItems', menuItems, 'blue')

    const items = menuItems.map((item, index) => (
      <li ><Link className={styles.linkText}
        key={index}
        to={item.path}
           >
        {item.name}
      </Link></li>
    ))
  // ku.log('items', items, 'blue')
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
