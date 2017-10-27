// BackButton
import React from 'react'
import styles from './style.css'
import Link from 'elements/Link'

const BackButton = (props) => {
  return (
    <Link back={props.back}><button className={styles.btn}>Back</button></Link>
  )
}

export default BackButton
