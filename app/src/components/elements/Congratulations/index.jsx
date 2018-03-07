// Callout
import React from 'react'
import iRocket from './media/rocket.png'

const baseStyle = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  padding: '20px',
  margin: '20px 0',
  backgroundColor: '#adffad',
  border: '1px solid rgb(75, 75, 75)',
  borderLeftColor: '#008000',
  borderLeftWidth: '5px',
  borderRadius: '3px',
  color: 'black',
}
const innerDivStyle = {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
}
const titleStyle = {
  fontSize: '22px',
}
const imgStyle = {
  maxWidth: '50px',
}

const Congratulations = ({ title, children }) => {
  return (
    <div style={baseStyle}>
      <div style={innerDivStyle}>
        <p style={titleStyle}>{title}</p>
      </div>
      <div style={innerDivStyle}>
        <img src={iRocket} style={imgStyle} alt='rocket blast-off' />
      </div>
    </div>
  )

}

export default Congratulations
