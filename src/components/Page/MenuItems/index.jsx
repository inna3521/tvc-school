// MenuItems
import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions'
import * as selectors from '../../../store/selectors'
import './style.css'
import menuItems from './menu-items'
import MenuItem from './MenuItem'
import * as ku from '../../../lib/ke-utils'

const MenuItems = ({ updateCurrentComponentId }) => {
  ku.log('MenuItems', 'a', 'blue' )
  ku.log('menuItems', menuItems, 'blue')
  const handleMenuItemClick = (val) => {
    // ku.log('handleMenuItemClick: val', val, 'green')
    updateCurrentComponentId(val)
  }

  const items = menuItems.map((item) => (
    <MenuItem
      key={item.id}
      id={item.id}
      itemText={item.itemText}
      handleMenuItemClick={handleMenuItemClick}
    />
  ))
  ku.log('items', items, 'blue')
  return (
    <div>
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
