// MenuItems
import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions'
import * as selectors from '../../../store/selectors'
import { Link } from 'react-router-dom'
import menuItems from './menu-items'
import MenuItem from './MenuItem'
// import * as ku from '../../../lib/ke-utils'

const MenuItems = (props) => {
  // ku.log('menuItems', menuItems, 'blue')


    const items = menuItems.map((item) => (
      <li><Link
        key={item.id}
        to={item.to}
          >
        {item.name}
      </Link></li>
    ))
  // ku.log('items', items, 'blue')
  return (
    <div>
      <h2>Contents</h2>
      {items}
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
