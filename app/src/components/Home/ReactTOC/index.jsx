// ReactTOC
import React from 'react'
import PageTitle from 'elements/PageTitle'
import MenuItems from 'elements/MenuItems'
import { reactMenuItems } from 'data/menu-items'
import * as ku from 'lib/ke-utils'

const ReactTOC = (props) => {
  // ku.log('ReactTOC: reactMenuItems', reactMenuItems, 'blue')
  return (
    <div>
      <PageTitle
        title='React Lessons'
        back={props.match}
      />
      <MenuItems
        src={reactMenuItems}
      />
    </div>
  )
}

export default ReactTOC
