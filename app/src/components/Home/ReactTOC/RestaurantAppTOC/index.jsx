// ReactTOC
import React from 'react'
import PageTitle from 'elements/PageTitle'
import MenuItems from 'elements/MenuItems'
import { restaurantAppTOC } from 'data/menu-items'
import * as ku from 'lib/ke-utils'

const ReactTOC = (props) => {
  // ku.log('ReactTOC: reactMenuItems', reactMenuItems, 'blue')
  const subTitleStyle = {
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 200,
  }
  return (
    <div>
      <header>
        <div style={subTitleStyle}>Don't code alone!</div>
      </header>
      <MenuItems
        src={restaurantAppTOC}
      />
    </div>
  )
}

export default ReactTOC
