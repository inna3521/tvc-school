// BackButton
import React from 'react'
import styles from './style.css'
import Link from 'elements/Link'
import PropTypes from 'prop-types'

const BackButton = ({ match }) => {
  console.log('BackButton: match', match)
  return (
    <Link match={match}><button className={styles.btn}>Back</button></Link>
  )
}

BackButton.propTypes = {
  match: PropTypes.object.isRequired,
}

export default BackButton
