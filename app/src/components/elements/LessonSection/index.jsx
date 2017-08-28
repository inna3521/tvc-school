// LessonSection
import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.css'
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
      />
      {props.children}
    </div>
  )
}

export default LessonSection
