import React from 'react'
import PropTypes from 'prop-types'

// square
// angle
// curley
const InlineTag = (props) => {
  let openBracket
  let closeBracket
  if (props.square) {
    openBracket = '['
    closeBracket = ']'
  } else if (props.angle) {
    openBracket = '<'
    closeBracket = '>'
  } else if (props.curley) {
    openBracket = '{'
    closeBracket = '}'
  }
  return (
    <span>{openBracket}{props.children}{closeBracket}</span>
  )
}

InlineTag.propTypes = {
  square: PropTypes.bool,
  angle: PropTypes.bool,
  curley: PropTypes.bool,
  children: PropTypes.string.isRequired,
}

export default InlineTag;
