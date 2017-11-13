// ReactTOC
import React from 'react'
import styles from './style.css'
import PageTitle from 'elements/PageTitle'
import MenuItems from 'elements/MenuItems'
import { reactTOC } from 'data/menu-items'

// import * as ku from 'lib/ke-utils'

const ReactTOC = (props) => {
  // ku.log('ReactTOC: reactMenuItems', reactMenuItems, 'blue')
  return (
    <div>

      <PageTitle
        title='React Lessons'
        back={props.match}
      />
      <button>HI</button>
      <div className={styles.contentWrapper}>
        <MenuItems
          src={reactTOC}
        />
        <div>

        </div>
      </div>
    </div>
  )
}

export default ReactTOC
