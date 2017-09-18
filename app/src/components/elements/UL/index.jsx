// UL
import React from 'react'
import styles from './style.css'

const UL = (props) => {

  let items = props.listItems.map((t, index) => {
    if (typeof t === 'object') {
      return (<li key={index}>{t}</li>)
    } else {
      let itemText = {__html: t}
      return (
        <li
          key={index}
          dangerouslySetInnerHTML={itemText}
        />
      )
    }
  })

  return (
    <ul>
      {items}
    </ul>
  )
}

export default UL;
