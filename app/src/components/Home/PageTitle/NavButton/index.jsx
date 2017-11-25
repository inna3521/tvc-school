import React from 'react'
import styles from './style.css'
import { Link } from 'react-router-dom'

const NavButton = ({ path, children }) => {
  return (
    <Link to={path}><button className={styles.btn}>{children}</button></Link>
  )
}

export default NavButton
