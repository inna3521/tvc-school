// LessonHeader
import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.css'
import { Link } from 'react-router-dom'
/*
    props
      > title
      > subTitle
 */
const LessonHeader = (props) => {
  return (
    <div>

      <Link to='/'>
        <Button>
          Back
        </Button>
      </Link>

      <hr/>
      <div className={styles.lessonTitle}>{props.title}</div>
      <div className={styles.lessonSubTitle}>{props.subTitle}</div>
      <hr/>
      {props.children}
    </div>
  )
}

export default LessonHeader
