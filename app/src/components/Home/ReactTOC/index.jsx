// ReactTOC
import React from 'react'
import Lesson from 'elements/Lesson'
import MenuItems from 'elements/MenuItems'
import { reactMenuItems } from 'data/menu-items'
import * as ku from 'lib/ke-utils'

const ReactTOC = (props) => {
  // ku.log('ReactTOC: reactMenuItems', reactMenuItems, 'blue')
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
