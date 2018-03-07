import React from 'react'
// import { caution, normal } from '../../../lib/colors'
import * as colors from 'lib/colors'


const Step = ({ children, caution, danger, goal, normal }) => {
  let color
  switch (true) {
    case caution:
      color = colors.caution
      break;
    case danger:
      color = colors.danger
      break;
    default:
      color = colors.normal
  }
  const liStyle = {
    color: color,
  }

  return (
    <li style={liStyle}>{children}</li>
  )
}
export default Step
