// Lesson
import React from 'react'
// import styles from './style.css'
import LessonHeader from './LessonHeader'
import LessonFooter from './LessonFooter'

/*
    props
      > title
      > subTitle
 */
const Lesson = (props) => {
  return (
    <div>
      <LessonHeader
        title={props.title}
        subTitle={props.subTitle}
        back={props.back}
      />
      {props.children}
      <LessonFooter/>
    </div>


  )
}

export default Lesson
