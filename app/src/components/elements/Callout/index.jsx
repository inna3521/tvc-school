// Callout
import React from 'react'
import classNames from 'classnames'
import styles from './style.css'

const Callout = ({ danger, warning, goal, info, title, children }) => {
  const callOutStyle = classNames(
    {
      [styles.callout]: true,
      [styles.calloutDanger]: danger,
      [styles.calloutWarning]: warning,
      [styles.calloutGoal]: goal,
      [styles.calloutInfo]: info,
    }
  )
  const titleStyle = classNames({
    [styles.titleDanger]: danger,
    [styles.titleWarning]: warning,
    [styles.titleGoal]: goal,
    [styles.titleInfo]: info,
  })

  return (
    <div className={callOutStyle}>
      <h4 className={titleStyle}>{title}</h4>
      {children}
    </div>
  )

}

export default Callout;
