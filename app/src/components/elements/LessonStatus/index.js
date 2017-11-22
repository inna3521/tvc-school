import React from 'react'
import styles from './style.css'
import UL from 'elements/UL'
import classNames from 'classnames'

const LessonStatus = ({ outline, underConstruction, draftOne, draftTwo, draftThree, ...props}) => {
  const statusStyle = {
    color: 'red',
    backgroundColor: 'black',
    padding: '20px 0',
  }
  const showButton = draftOne || draftTwo || draftThree || underConstruction
  let statusTitle = ''
  if (underConstruction) {
    statusTitle = 'under construction'
  } else if (draftOne) {
    statusTitle = 'draft-1'
  } else if (draftTwo) {
    statusTitle = 'draft-2'
  } else if (draftThree) {
    statusTitle = 'draft-3'
  } else if (outline) {
    statusTitle = 'outline'
  }
  const statusButtonStyle = classNames({
    [styles.button]: true,
    [styles.underConstruction]: underConstruction || outline,
    [styles.draftOne]: draftOne,
    [styles.draftTwo]: draftTwo,
    [styles.draftThree]: draftThree,
  })
  const statusButton = showButton
    ? <button className={statusButtonStyle}>{statusTitle}</button>
    : null

      return (
      <div id='LessonStatus' style={statusStyle}>
        <UL>
          {props.children}
        </UL>
        <div className={styles.status}>
          {statusButton}
        </div>
      </div>
      )
      }

      export default LessonStatus
