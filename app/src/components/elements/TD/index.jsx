// TD
import React from 'react'
import classNames from 'classnames'
import styles from './style.css'

const TD = (props) => {
  const tdStyles = classNames({
    [styles.centerHorizontal]: props.centerHorizontal,
    [styles.centerVertical]: props.centerVertical,
  })
  return (
    <td className={tdStyles}>
      {props.children}
    </td>
  )
}

export default TD
