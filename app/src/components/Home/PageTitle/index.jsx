import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import styles from './style.css'
import * as actionCreators from 'store/actions'
import * as selectors from 'store/selectors'
import NavButton from './NavButton'
import PropTypes from 'prop-types'
// import { log } from 'lib/ke-utils'

const PageTitle = ({ routes, location }) => {
  // Location
  const { pathname } = location
  const route = routes.filter((r, index) => (r.path === pathname))[0]
  const { index, title, subTitle, type } = route
  const maxIndex = routes.length - 1
  const previous = index > 0 // t/f value
  const next = index < maxIndex // t/f vaue
  // TOC
  let previousTOCPath = ''
  for (let i=index-1; i>=0; i--) {
    if (routes[i].type === 'toc') {
      previousTOCPath = routes[i].path
      break
    }
  }
  // Buttons
  const previousButton = previous
    ? <NavButton className={styles.back} path={routes[index - 1].path}><i className="fa fa-chevron-left" aria-hidden="true"></i> {routes[index - 1].title}</NavButton>
    : <div className={styles.spacer}></div>
  const nextButton = next
    ? <NavButton className={styles.back} path={routes[index + 1].path}>{routes[index + 1].title} <i className="fa fa-chevron-right" aria-hidden="true"></i></NavButton>
    : <div className={styles.spacer}></div>
  const previousTOCButton = previousTOCPath
    ? <NavButton className={styles.back} path={previousTOCPath}>TOC <i className="fa fa-chevron-up" aria-hidden="true"></i></NavButton>
    : null

  const pageTitlesStyle = classNames({
    [styles.pageTitles]: true,
    [styles.tocStyle]: type === 'toc',
  })
  return (

    <div className={styles.pageHeader}>
      <div className={styles.navBar}>
        <div className={styles.left}>
          {previousButton}
        </div>
        <div className={styles.center}>
          {previousTOCButton}
        </div>
        <div className={styles.right}>
          {nextButton}
        </div>
      </div>
      <div className={pageTitlesStyle}>
        <div className={styles.titles}>
          <h1 className={styles.title}>{title}</h1>
          {subTitle ? <h2 className={styles.subTitle}>{subTitle}</h2> : null}
        </div>
      </div>
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
