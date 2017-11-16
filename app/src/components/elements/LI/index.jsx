import React from 'react'
import PropTypes from 'prop-types'

const LI = (props) => {
  return (
    <li style={props.style}>{props.children}</li>
  )
}

LI.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired,
  ]),
}

export default LI
