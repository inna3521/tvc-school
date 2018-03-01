import React from 'react'

const videoStyle = {
  maxWidth: '400px',
}

const Video = ({ src }) => {
  return (<video style={videoStyle} src={src} controls></video>)
}
export default Video
