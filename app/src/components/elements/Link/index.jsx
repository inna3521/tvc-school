import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const linkStyle = {
  color: '#31b0d5',
  fontWeight: 'bold',
}
const linkActiveStyle = {
  // color: '#5bc0de',
  color: 'green',
  textDecoration: 'underline',
}

/*
    to: path from root with no leading '/'
        E.g., 'html/first-project'
 */
const LinkItem = ({ to, match, children }) => {
  const backOne = () => {
    const arrPath = match.path.split('/')
    // remove the last element
    arrPath.splice(arrPath.length - 1, 1)
    // remove the first element which is always ""
    arrPath.splice(0, 1)
    return `/${arrPath.join('/')}`
  }
  // Only goes back if match has been passed in
  const path = match
    ? backOne()
    : `/${to}`

  return (
    <NavLink to={path} style={linkStyle} activeStyle={linkActiveStyle}>{children}</NavLink>
  )
}

// Must provide either to or back
LinkItem.propTypes = {
  to: PropTypes.string,
  match: PropTypes.object // if present, to will be ignored
}

export default LinkItem
