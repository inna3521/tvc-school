// A
import React from 'react'
import styles from './style.css'
import PropTypes from 'prop-types'

const A = (props) => {
  return (
    <a className={styles.linkText} href={props.href}>{props.children}</a>
  )
}

A.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired,
  ]),
}

export default A
