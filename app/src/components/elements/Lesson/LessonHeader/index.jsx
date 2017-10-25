// LessonHeader
import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './style.css'
// import { Link } from 'react-router-dom'
import Link from 'elements/Link'

/*
    props
      > title
      > subTitle
 */
const LessonHeader = (props) => {
  // console.log('props', props)
  return (
    <div>

      <Link back={props.back}>
        <Button bsStyle="info">
          Back
        </Button>
      </Link>

      <div className={styles.title}>{props.title}</div>
      <div className={styles.subTitle}>{props.subTitle}</div>
      {props.children}
    </div>
  )
}

export default LessonHeader
