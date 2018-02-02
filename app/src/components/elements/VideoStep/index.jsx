import React from 'react'
import Video from 'elements/Video'
import { Grid, Row, Col, Media } from 'react-bootstrap'

export const VideoStep = ({ src, children }) => {
  return (
    <Media>
      <Media.Left>
        <Video src={src}></Video>
      </Media.Left>
      <Media.Body>
        <ol>
          {children}
        </ol>
      </Media.Body>
    </Media>

  )

}
export default VideoStep
