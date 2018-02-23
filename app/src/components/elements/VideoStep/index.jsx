import React from 'react'
import Video from 'elements/Video'
import { Media } from 'react-bootstrap'

export const VideoStep = ({ src, children, title }) => {
  return (
    <div>
      {title ? <h3>{title}</h3> : null}
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
    </div>
  )

}
export default VideoStep
