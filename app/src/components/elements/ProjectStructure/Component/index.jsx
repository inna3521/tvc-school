import React from 'react'
import styles from '../style.css'
import classNames from 'classnames'

const Component = (props) => {
  const liStyles = classNames({
    [styles.level1]: props.level === 1,
    [styles.level2]: props.level === 2,
    [styles.level3]: props.level === 3,
    [styles.level4]: props.level === 4,
    [styles.fontSize]: false,
  })
  const cogStyle = {
    fontSize: '0.7em',
  }
  return (
    <li className={liStyles}><i className="fa fa-cog" style={cogStyle} aria-hidden="true"></i> {props.children}</li>
  )
}

export default Component
