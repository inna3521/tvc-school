// ReactTOC
import React from 'react'
import Lesson from 'elements/Lesson'
import MenuItems from 'elements/MenuItems'
import { reactMenuItems } from '../menu-items'

const ReactTOC = (props) => {
  console.log('props', props)
  return (
    <Lesson
      title='React Lessons'
      back={props.match}
    >
      <MenuItems
        src={reactMenuItems}
      />

    </Lesson>
  )
}

export default ReactTOC
