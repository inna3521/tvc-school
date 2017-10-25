import React from 'react'
import styles from '../style.css'
import classNames from 'classnames'

const Folder = (props) => {
  const liStyles = classNames({
    [styles.level1]: props.level === 1,
    [styles.level2]: props.level === 2,
    [styles.level3]: props.level === 3,
    [styles.level4]: props.level === 4,
  })
  return (
    <li className={liStyles}><i className="fa fa-folder-open-o" aria-hidden="true"></i> {props.children}</li>
  )
}

export default Folder
