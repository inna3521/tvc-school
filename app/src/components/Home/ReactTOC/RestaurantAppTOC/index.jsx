// MenuApp
import React from 'react'
import Link from 'elements/Link'
import './style.css'
import PageTitle from 'elements/PageTitle'
import P from 'elements/P'
import MenuItems from 'elements/MenuItems'
import { restaurantAppTOC } from 'data/menu-items'

const MenuApp = (props) => {
  return (
    <div>
      <PageTitle
        title='React Challenge - Restaurant Website' back={props.match}
      />
      <MenuItems
        src={restaurantAppTOC}
      />
      <ul>
        {/* <li><Link to='/menu-app'>Restaurant Website - Home</Link></li>
          <li><Link to='/menu-app/welcome'>Welcome</Link></li>
        <li><Link to='/menu-app/header'>Header</Link></li> */}
      </ul>
    </div>
  )
}

export default MenuApp;
