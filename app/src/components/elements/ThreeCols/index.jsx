import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'


const divOuterStyle = {
  display: 'flex',
  alignItems: 'stretch',
  alignContent: 'stretch',
  width: '100%',
}
const divInnerStyle = {
  flex: '0 0 33%',
  marginLeft: '0.3333%',
  padding: '3px',
  backgroundColor: 'white',
  color: 'black',
}
const divInner3Style = {
  ...divInnerStyle,
  padding: '5px 10px',
}
export const ThreeCols = ({ children, title }) => {

  return (
    <div>
      {title ? <h3>{title}</h3> : null}
      <div style={divOuterStyle}>
        <div style={divInnerStyle}>{children[0]}</div>
        <div style={divInnerStyle}>{children[1]}</div>
        <div style={divInner3Style}>{children[2]}</div>
      </div>
    </div>
  )

}
export default ThreeCols
