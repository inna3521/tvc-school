import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/*
    Parameters
    > [optional] props.to - a known react-router path
    > [optional] props.back - if present the link will navigate up one level in the path. props.to, if supplied, will be ignored
    * Must provide either props.to or props.back
*/
const LinkItem = (props) => {
  const backOne = () => {
    const arrPath = props.match.path.split('/')
    // remove the last element
    arrPath.splice(arrPath.length - 1, 1)
    // remove the first element which is always ""
    arrPath.splice(0, 1)
    return `/${arrPath.join('/')}`
  }
  const to = props.match
    ? backOne()
    : `/${props.to}`

  return (
    <Link to={to}>{props.children}</Link>
  )
}

// Must provide either to or back
LinkItem.propTypes = {
  to: PropTypes.string,
  match: PropTypes.object // if present, to will be ignored
}

export default LinkItem
