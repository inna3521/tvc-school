import React from 'react'

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

export default InlineTag;
