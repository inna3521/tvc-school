// A
import React from 'react'

const htmlStyle = {
  fontFamily:  'Ubuntu Mono, monospace',
}

const Html= ({ close, children }) => {
  return (
    <span style={htmlStyle}>
      &lt;
      {close ? '/' : null}
      {children}
      &gt;
    </span>
  )
}

export default Html
