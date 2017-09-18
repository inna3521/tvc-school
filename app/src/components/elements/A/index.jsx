import React from 'react'
import styles from './style.css'

const A = (props) => {
  return (
    <a className={styles.linkText} href={props.href}>{props.children}</a>
  )
}

export default A
