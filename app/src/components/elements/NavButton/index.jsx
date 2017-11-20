import React from 'react'
import styles from './style.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavButton = ({ path, children }) => {
  return (
    <Link to={path}><button className={styles.btn}>{children}</button></Link>
  )
}

NavButton.propTypes = {
  match: PropTypes.object.isRequired,
}

export default NavButton
