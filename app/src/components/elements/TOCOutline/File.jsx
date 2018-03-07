// File
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.css'
import classNames from 'classnames'

const File = ({ level, status, number, path, children}) => {
  const liStyles = classNames({
    [styles.level1]: level === 1,
    [styles.level2]: level === 2,
    [styles.level3]: level === 3,
    [styles.level4]: level === 4,
    [styles.notStarted]: status === 'notStarted',
    [styles.needsWork]: status === 'needsWork',
    [styles.done]: status === 'done',
    [styles.listStyle]: true,
  })
  return (
    <NavLink to={path}><li className={liStyles}>{number} {children}</li></NavLink>

  )
}

export default File
