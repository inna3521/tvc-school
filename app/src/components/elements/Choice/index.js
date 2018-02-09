import React from 'react'

const Choice = ({ index, tag, value, handleChange, inputChecked, label, questionState}) => {

  const choiceStyle = {
    display: 'flex',
    alignItems: 'middle',
    padding: '3px 0',
  }
  const inputStyle = {
    margin: 0,

  }
  const labelStyle = {
    color: questionState === 'unanswered' ? 'inherit' : 'black',
    fontWeight: 'normal',
    margin: '0 0 0 4px',
    verticalAlign: 'middle',
  }
  const _id = `${tag}${index}`
  return (
    <div style={choiceStyle}>
      <input
        id={_id}
        type="radio"
        name={`${tag}`}
        value={value}
        onChange={(e) => handleChange(e)}
        checked={inputChecked === _id}
        style={inputStyle}
      />
      <label style={labelStyle} htmlFor={_id}>{label}</label><br/>
    </div>
  )
}
export default Choice
