// BackButton
import React from 'react'
import styles from './style.css'
import Link from 'elements/Link'

const BackButton = (props) => {
  return (
    <Link back={props.back}><button>Back</button></Link>
  )
}

export default BackButton
