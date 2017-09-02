
import React from 'react'
// import styles from './style.css'
import classNames from 'classnames'
import Row from './Row'
import ColHeader from './ColHeader'


const Table = (props) => {
  const tableStyles = classNames({
    'table': true,
    'table-striped': true,
  })
  let headerRow = ''
  if (props.colLabels.length > 0) {
    headerRow = <ColHeader
      colLabels={props.colLabels}
                />
      }

  const rows = props.rowData.map((r, index) => (
      <Row key={index} rowData={r} />
  ))

  return (
    <table className={tableStyles}>
      <tbody>
        {headerRow}
        {rows}
      </tbody>
    </table>
  )
}

export default Table
