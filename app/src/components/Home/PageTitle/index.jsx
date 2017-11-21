import React from 'react'
import { connect } from 'react-redux'
import styles from './style.css'
import * as actionCreators from 'store/actions'
import * as selectors from 'store/selectors'
import NavButton from './NavButton'
import PropTypes from 'prop-types'

const PageTitle = ({ routes, location}) => {
  const { pathname } = location
  const route = routes.filter((r, index) => (r.path === pathname))[0]
  const { index, title } = route
  const previous = route.index > 0
    ? routes[index - 1].path
    : ''
  const next = route.index <= routes.length -1
    ? routes[index + 1].path
    : ''
  return (
    <div className={styles.pageHeader}>

      <NavButton className={styles.back} path={previous}>Back</NavButton>

      <div className={styles.titles}>
        <h1 className={styles.title}>{title}</h1>
        {/* <h2 className={styles.subTitle}>{subTitle}</h2> */}
      </div>
      <NavButton className={styles.back} path={next}>Next</NavButton>
    </div>
  )
}

PageTitle.propTypes = {
  routes: PropTypes.array,
  location: PropTypes.object,
}
const mapStateToProps = (state) => ({
  // currentRouteIndex: selectors.getCurrentRouteIndex(state)
  routes: selectors.getRoutes(state)
})

export default connect(mapStateToProps, actionCreators)(PageTitle)
