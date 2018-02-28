import React from 'react'

const divOuterStyle = {
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'stretch',
  alignContent: 'stretch',
  width: '100%',
}
const divInnerStyle = {
  flex: '0 0 33%',
  marginLeft: '0.3333%',
  marginBottom: '2px',
  padding: '3px',
  backgroundColor: 'white',
  color: 'black',
  minWidth: '200px',
}
const divInner3Style = {
  ...divInnerStyle,
  padding: '5px 10px',
}
const titleStyle = {
  marginBottom: '12px',
}
export const ThreeCols = ({ children, title }) => {

  return (
    <div>
      {title ? <h3 style={titleStyle}>{title}</h3> : null}
      <div style={divOuterStyle}>
        <div style={divInnerStyle}>{children[0]}</div>
        <div style={divInnerStyle}>{children[1]}</div>
        <div style={divInner3Style}>{children[2]}</div>
      </div>
    </div>
  )

}
export default ThreeCols
