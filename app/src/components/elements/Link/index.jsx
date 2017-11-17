import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const LinkItem = ({ to, match, children }) => {
  const backOne = () => {
    const arrPath = match.path.split('/')
    // remove the last element
    arrPath.splice(arrPath.length - 1, 1)
    // remove the first element which is always ""
    arrPath.splice(0, 1)
    return `/${arrPath.join('/')}`
  }
  const path = match
    ? backOne()
    : `/${to}`

  return (
    <Link to={path}>{children}</Link>
  )
}

// Must provide either to or back
LinkItem.propTypes = {
  to: PropTypes.string,
  match: PropTypes.object // if present, to will be ignored
}

export default LinkItem
