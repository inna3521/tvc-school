// UL
import React from 'react'
// import styles from './style.css'

const UL = (props) => {

  let items = props.listItems.map((t, index) => {
    // let itemText = {__html: t}
    return (
      // <li
      //   key={index}
      //   dangerouslySetInnerHTML={itemText}
      // />
      <li key={index}>{t}</li>
    )
  })

  return (
    <ul>
      {items}
    </ul>
  )
}

export default UL;
