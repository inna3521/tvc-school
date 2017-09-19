// Lesson
import React from 'react'
import classNames from 'classnames'
import styles from './style.css'

const NewTable = (props) => {
  const tableStyles = classNames({
    'table': true,
    'table-striped': props.striped,
    [styles.tableSpacing]: true,
  })
  return (
    <table className={tableStyles}>
      <tbody>
        {props.children}
      </tbody>
    </table>
  )
}

export default NewTable
