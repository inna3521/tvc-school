import React from 'react'
import styles from './style.css'
import PropTypes from 'prop-types'
import Link from 'elements/Link'
import Button from 'elements/Button'
import routes from 'toc/toc'
// import * as ku from 'lib/ke-utils'

/*
    Remove leading '/' from path:
    While the path: for a route needs a leading '/' the to: for a link needs it removed
    Return only name and modified path
*/
const transformRoutes = (routes) => {
  const newRoutes = routes.map((r) => {
    let o = {
      title: r.title,
      path: r.path.substring(1)
    }
    return o
  })
  return newRoutes
}

/*
    A toc is defined by its route such that all sub-routes for a given TOC will have the same root path.
    Filter all routes to get only those that match the passed-in rootPath
    Path.split('/') always returns the first element as "" bec the path starts with '/'. Therefore, the root of the path is the element at index 1
    If the rootPath === '/' only list routes with type==='toc'
*/
function filterRoutes(rootPath) {
  let filteredRoutes = []
  if (rootPath === '/') {
    filteredRoutes = routes.filter((element) => {
      return element.type === 'toc'
    })
  } else {
    filteredRoutes = routes.filter((element) => {
      return element.path.split('/')[1] === rootPath && element.type !== 'toc'
    })
  }
  return filteredRoutes
}

const TOC = ({ rootPath, pageTitle, match }) => {
  const tmp = filterRoutes(rootPath)
  let currentRoutes = transformRoutes(tmp)

  const items = currentRoutes.map((item, index) => (
    <li key={index}>
      <Link className={styles.linkText}
        to={item.path}
      >
        {item.title}
      </Link></li>
  ))
  return (
    <div className={styles.wrapper}>
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

// TOC.propTypes = {
//   src: PropTypes.array.isRequired,
//   pageTitle: PropTypes.string.isRequired,
//   back: PropTypes.object,
// }

export default TOC
