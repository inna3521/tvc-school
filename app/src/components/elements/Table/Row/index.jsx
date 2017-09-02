
import React from 'react'
import styles from './style.css'

const Row = (props) => {

  const row = props.rowData.map((d, index) => (
    <td key={index} className={styles.tableData}>{d}</td>
  ))
  return (
    <tr>
      {row}
    </tr>
  )
}

export default Row
