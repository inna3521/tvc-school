// UL
import React from 'react'
// import styles from './style.css'

const UL = (props) => {

  let items = props.listItems.map((t, index) => {
    let itemText = {__html: t}
    return (
      <li
        key={index}
        dangerouslySetInnerHTML={itemText}
      />
    )
  })

  return (
    <ol>
      {items}
    </ol>
  )
}

export default UL;
