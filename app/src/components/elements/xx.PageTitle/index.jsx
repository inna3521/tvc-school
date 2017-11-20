import React from 'react'
import { connect } from 'react-redux'
import styles from './style.css'
import * as actionCreators from 'store/actions'
import * as selectors from 'store/selectors'
import NavButton from 'elements/NavButton'
import PropTypes from 'prop-types'
// import * as ku from 'lib/ke-utils'

const PageTitle = ({ match, title, subTitle }) => {
  console.log('PageTitle: match', match)
  return (
    <div className={styles.pageHeader}>

      <NavButton className={styles.back} path={'some-back'}>Back</NavButton>

      <div className={styles.titles}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subTitle}>{subTitle}</h2>
      </div>
      <NavButton className={styles.back} path={'some-forward'}>Forward</NavButton>
    </div>
  )
}

PageTitle.propTypes = {
  back: PropTypes.object,
  title: PropTypes.string
}
// const mapStateToProps = (state) = ({
//   currentRouteIndex: selectors.getCurrentRouteIndex(state)
// })

export default PageTitle
