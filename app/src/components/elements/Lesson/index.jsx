// Lesson
import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.css'

/*
    props
      > title
      > subTitle
 */
const Lesson = (props) => {
  return (
    <div>
      <Button
        bsStyle='primary'
        onClick={() => props.handleMenuItemClick()}
      >
        Back
      </Button>
      <hr/>
      <div className={styles.lessonTitle}>{props.title}</div>
      <div className={styles.lessonSubTitle}>{props.subTitle}</div>
      {props.children}
    </div>
  )
}

export default Lesson
