// UL
import React from 'react'
import classNames from 'classnames'
import styles from './style.css'

const UL = (props) => {
  const styles = classNames(
    {
      'ke-callout-medium': true,
    }
  )


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
    <ul>
      {items}
    </ul>
  )
}

export default UL;
