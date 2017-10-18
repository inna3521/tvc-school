// File
import React from 'react'
import styles from '../style.css'
import classNames from 'classnames'

const Folder = (props) => {
  const liStyles = classNames({
    [styles.indent2]: props.level === 2,
    [styles.indent4]: props.level === 3,
    [styles.indent6]: props.level === 4,
    [styles.indent8]: props.level === 5,
  })
  return (
    <li className={liStyles}><i className="fa fa-file-code-o" aria-hidden="true"></i> {props.children}</li>

  )
}

export default Folder
