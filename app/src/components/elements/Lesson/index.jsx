// Lesson
import React from 'react'
// import styles from './style.css'
import LessonHeader from './LessonHeader'
import LessonFooter from './LessonFooter'

/*
    props
      > title
      > subTitle
      > handleMenuItemClick={handleMenuItemClick}
 */
const Lesson = (props) => {
  return (
    <div>
      <LessonHeader
        title={props.title}
        subTitle={props.subTitle}
        handleMenuItemClick={props.handleMenuItemClick}
      />
      {props.children}
      <LessonFooter/>
    </div>


  )
}

export default Lesson
