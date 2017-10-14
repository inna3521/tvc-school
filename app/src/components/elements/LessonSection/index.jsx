// LessonSection
import React from 'react'
// import styles from './style.css'
import LessonSectionHeader from './LessonSectionHeader'


/*
    props
      > title
      > subTitle
 */
const LessonSection = (props) => {
  return (
    <div>
      <LessonSectionHeader
        title={props.title}
        subTitle={props.subTitle}
        level={props.level}
      />
      {props.children}
    </div>
  )
}

export default LessonSection
