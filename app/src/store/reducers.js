import { combineReducers } from 'redux'
// import { merge, prepend, dissoc, without } from 'ramda';
import { merge } from 'ramda'
// import * as ku from '../lib/ke-utils';
import routesList from 'toc/toc'

/* test stuff
import { withRouter } from 'react-router-dom'
import React from 'react'
import TOC from 'elements/TOC'
*/

const transformRoutes = () => {

  const newRoutes = routesList.map((r, index) => {
    return {
      index: index,
      title: r.title,
      type: r.type,
      path: r.path,
    }
  })
  return newRoutes
}


export const routes = (state = transformRoutes(), {type, payload}) => {
  switch (type) {
    case 'app/getRoutes':
      return transformRoutes()
    default:
      return state
  }
}

export const currentRouteIndex = (state = 0, {type, payload}) => {
  switch (type) {
    case 'app/setCurrentRouteIndex':
      return merge(state, { currentRouteIndex: payload })
    default:
      return state
  }
}

export default combineReducers({
  currentRouteIndex,
  routes,
})
