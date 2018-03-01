// UL
import React from 'react'

const OL = ({style, children, start}) => {
  return (
    <ol start={start || 1} style={style}>{children}</ol>
  )
}

export default OL;
