import React from 'react'
import styles from './style.css'

const ColHeader = (props) => {
  let colLabels = ''
  colLabels = props.colLabels.map((l, index) => (
    <th key={index} className={styles.colHeader}>{l}</th>
  ))
  console.log(colLabels)
  return (
    <tr>
      {colLabels}
    </tr>
  )
}

export default ColHeader
