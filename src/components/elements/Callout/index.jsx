// SiteTitle
import React from 'react'
import classNames from 'classnames'
import P from '../../elements/P'
import './style.css'

const Callout = (props) => {
  const styles = classNames(
    {
      'ke-callout': true,
      'ke-callout-danger': props.type === 'danger',
      'ke-callout-warning': props.type === 'warning',
      'ke-callout-goal': props.type === 'goal',
      'ke-callout-info': props.type === 'info',
      'ke-callout-medium': true,
    }
  )
  let text = props.text
  let newText

  if (Array.isArray(text)) {
    newText = text.map((t, index) => {
      return (
        <P
          key={index}
          text={t}
        />
      )
    })
  } else {
    newText = text
  }
  return (
    <div className={styles}>
      <h4>{props.title}</h4>
      {newText}
    </div>
  )
}

export default Callout;
