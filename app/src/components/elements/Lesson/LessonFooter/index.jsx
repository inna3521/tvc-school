// LessonFooter
import React from 'react'
// import styles from './style.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const LessonFooter = (props) => {
  return (
    <div>
      <Link to='/'>
        <Button bsStyle="info">
          Back
        </Button>
      </Link>
    </div>
  )
}

export default LessonFooter
