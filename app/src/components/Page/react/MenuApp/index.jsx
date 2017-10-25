// MenuApp
import React from 'react'
import Link from 'elements/Link'
import './style.css'
import Pre from 'elements/Pre/'
import Img from 'elements/Img/index'
import Lesson from 'elements/Lesson'
import LessonSection from 'elements/LessonSection'
import OL from 'elements/OL'
import UL from 'elements/UL'
import P from 'elements/P'


const MenuApp = (props) => {
  return (
    <Lesson
      title=''
      subTitle=''
      handleMenuItemClick={props.handleMenuItemClick}
    >


      <Link to='/menu-app/header'>Somewhere</Link>
      <P>Some text here</P>


    </Lesson>

  )
}

export default MenuApp;
