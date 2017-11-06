import React from 'react'
import styles from './style.css'
import P from 'elements/P'
import classNames from 'classnames'

const CodeHeader = (props) => {
  const greenStyle = classNames({
    [styles.legendSquare]: true,
    [styles.green]: true,
  })
  const redStyle = classNames({
    [styles.legendSquare]: true,
    [styles.red]: true,
  })
  return (
    <div>
      <P>The button(s) below reveal part of the answer. Don't click until you have met the requiremets outlined above.</P>
      <div className={styles.legend}>
        <div className={greenStyle}><span>lines added</span></div>
        <div className={redStyle}>lines removed</div>
      </div>
    </div>
  )
}

export default CodeHeader
