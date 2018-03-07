import React from 'react'
import styles from './style.css'
import classNames from 'classnames'

const Folder = ({ level, status, number, children}) => {
  const liStyles = classNames({
    [styles.level1]: level === 1,
    [styles.level2]: level === 2,
    [styles.level3]: level === 3,
    [styles.level4]: level === 4,
    [styles.listStyle]: true,
  })

  return (
    <li className={liStyles}>{number} {children}</li>
  )
}

export default Folder
