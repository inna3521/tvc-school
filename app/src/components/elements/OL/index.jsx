// UL
import React from 'react'
// import styles from './style.css'

const OL = (props) => {

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
    <ol>
      {items}
    </ol>
  )
}

export default OL;
