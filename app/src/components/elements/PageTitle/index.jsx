import React from 'react'
import styles from './style.css'
import BackButton from 'elements/BackButton'
import PropTypes from 'prop-types'
// import * as ku from 'lib/ke-utils'

const PageTitle = (props) => {
  return (
    <div className={styles.pageHeader}>
      <BackButton className={styles.back} back={props.back}/>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.spacer}></div>
    </div>
  )
}

PageTitle.propTypes = {
  back: PropTypes.object,
  title: PropTypes.string
}

export default PageTitle
