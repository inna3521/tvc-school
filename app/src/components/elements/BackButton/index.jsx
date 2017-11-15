// BackButton
import React from 'react'
import styles from './style.css'
import Link from 'elements/Link'

const BackButton = ({ match }) => {
  return (
    <Link match={match}><button className={styles.btn}>Back</button></Link>
  )
}

export default BackButton
