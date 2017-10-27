// MenuApp
import React from 'react'
import Link from 'elements/Link'
import './style.css'
import Lesson from 'elements/Lesson'
import P from 'elements/P'
import MenuItems from 'elements/MenuItems'
import fMenuAppMenuItems from './MenuAppWelcome/menu-app-menu-items'

const MenuApp = (props) => {
  return (
    <Lesson
      title='React Challenge - Restaurant Website'
      subTitle=''
    >
      <MenuItems
        src={fMenuAppMenuItems}
      />
      <ul>
        {/* <li><Link to='/menu-app'>Restaurant Website - Home</Link></li>
          <li><Link to='/menu-app/welcome'>Welcome</Link></li>
        <li><Link to='/menu-app/header'>Header</Link></li> */}
      </ul>
      <P>Some text here</P>


    </Lesson>

  )
}

export default MenuApp;
