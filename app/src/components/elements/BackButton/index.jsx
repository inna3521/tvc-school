// BackButton
import React from 'react'
import styles from './style.css'
import Link from 'elements/Link'
import PropTypes from 'prop-types'

const BackButton = (props) => {
  return (
    <Link back={props.back}><button className={styles.btn}>Back</button></Link>
  )
}

BackButton.propTypes = {
  back: PropTypes.object.isRequired,
}

export default BackButton
