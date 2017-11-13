// MenuItems
import React from 'react'
import styles from './style.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions'
import * as selectors from '../../../store/selectors'
import Link from 'elements/Link'
import Button from 'elements/Button'
// import * as ku from 'lib/ke-utils'

const MenuItems = ({ src }) => {
  // ku.log('MenuItems: src', src, 'blue')

  const items = src.map((item, index) => (
    <li key={index}>
      <Link className={styles.linkText}
        to={item.to}
      >
        {item.name}
      </Link></li>
  ))
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <h2>Contents</h2>
        <ol>
          {items}
        </ol>
      </div>

      <div className={styles.rightSide}>
        <a href='https://join.slack.com/t/trivalleycoders/shared_invite/enQtMjY5ODI5OTQzMDcyLWU5ZGI1MDMxNGMzYjk1NzBiMTZjOGQ5OWE4Zjg5MTU0NzgyNWE3N2RjMGJmODcxMzkyZGMwMTNmYjFhZDllZDY'>
          <Button green><i className="fa fa-slack fa-2x" aria-hidden="true"></i>Join the Conversation on Slack</Button>
        </a>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const o = {
    currentComponentId: selectors.getCurrentComponentId(state)
  }
  return o
}
export default connect(mapStateToProps, actionCreators)(MenuItems)
