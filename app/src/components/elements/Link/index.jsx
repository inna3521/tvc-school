import React from 'react'
import { Link } from 'react-router-dom'

/*
    Parameters
    > [optional] props.to - a known react-router path
    > [optional] props.back - if present the link will navigate up one level in the path. props.to, if supplied, will be ignored
    * Must provide either props.to or props.back
*/
const LinkItem = (props) => {
  const backOne = () => {
    // const path = props.back.path
    // const arrPath = path.split('/')
    const arrPath = props.back.path.split('/')
    // remove the last element
    arrPath.splice(arrPath.length - 1, 1)
    // remove the first element which is always ""
    arrPath.splice(0, 1)
    return `/${arrPath.join('/')}`
  }
  const to = props.back
    ? backOne()
    : props.to

  return (
    <Link to={to}>{props.children}</Link>
  )
}

export default LinkItem
