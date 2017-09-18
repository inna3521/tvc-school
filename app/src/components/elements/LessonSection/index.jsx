// LessonSection
import React from 'react'
import styles from './style.css'
import LessonSectionHeader from './LessonSectionHeader'


/*
    props
      > title
      > subTitle
 */
const LessonSection = (props) => {
  return (
    <div className={styles.section}>
      <LessonSectionHeader
        title={props.title}
        subTitle={props.subTitle}
      />
      {props.children}
    </div>
  )
}

export default LessonSection
