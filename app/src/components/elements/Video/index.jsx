import React from 'react'
import styles from './style.css'

const Video = ({ src }) => {
  return (<video className={styles.video} src={src} controls></video>)
}
export default Video
