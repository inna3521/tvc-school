// ReactTOC
import React from 'react'
import MenuItems from 'elements/MenuItems'
import { restaurantAppTOC } from 'data/menu-items'

const RA011GettingStarted = (props) => {
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

export default RA011GettingStarted
