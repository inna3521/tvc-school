import React from 'react'
import styles from './style.css'
import PropTypes from 'prop-types'
import Link from 'elements/Link'
import Button from 'elements/Button'
import PageTitle from 'elements/PageTitle'
import routes from '../../Home/components'
// import * as ku from 'lib/ke-utils'

const TOC = ({ src, pageTitle, match }) => {

  const items = src.map((item, index) => (
    <li key={index}>
      <Link className={styles.linkText}
        to={item.to}
      >
        {item.name}
      </Link></li>
  ))
  console.log('TOC: match', match)
  return (
    <div className={styles.wrapper}>
      <PageTitle title={pageTitle} match={match} />
      <div className={styles.contentWrapper}>
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
    </div>
      )
      }

TOC.propTypes = {
  src: PropTypes.array.isRequired,
  pageTitle: PropTypes.string.isRequired,
  back: PropTypes.object,
}

export default TOC
