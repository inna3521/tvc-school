import React from 'react'
import styles from './style.css'
import Link from 'elements/Link'
import Button from 'elements/Button'
import routes from 'toc/toc'
import OL from 'elements/OL'
import LI from 'elements/LI'
// import { log } from 'lib/ke-utils'

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
    Exclude route with path '/' which is Home. Otherwise Home appears in Contents when you are alread Home so redundant
*/
function filterRoutes(rootPath) {
  let filteredRoutes = []
  if (rootPath === '/') {
    filteredRoutes = routes.filter((element) => {
      return element.type === 'toc' && element.path !== '/'
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
    <LI key={index}>
      <Link to={item.path}>
        {item.title}
      </Link></LI>
  ))
  const olStyle = {
    color: '#31b0d5',
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftSide}>
          <h2 className={styles.contents}>Contents</h2>
          <OL style={olStyle}>
            {items}
          </OL>
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

export default TOC
