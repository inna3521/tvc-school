// LessonSectionHeader
import React from 'react'
import styles from './style.css'

/*
    props
      > title
      > subTitle
 */
const LessonSection = (props) => {
  return (
    <div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.subTitle}>{props.subTitle}</div>
      {props.children}
    </div>
  )
}

export default LessonSection
