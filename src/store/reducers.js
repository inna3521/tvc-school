import { combineReducers } from 'redux';
// import { merge, prepend, dissoc, without } from 'ramda';
import { merge, prepend, dissoc } from 'ramda';
import * as ku from '../lib/ke-utils';



export const currentComponentId = (state = 'not-set', { type, payload }) => {
  switch (type) {
    case 'app/currentComponentId':
      ku.log('reducers.updateComponentId.payload', payload, 'orange');
      return payload.value;
    default:
      return state;
  }
};

export const requests = (state = {}, { type, payload, meta }) => {
  switch (type) {
    case 'app/markRequestPending':
      return merge(state, { [meta.key]: { status: 'pending', error: null } });
    case 'app/markRequestSuccess':
      return merge(state, { [meta.key]: { status: 'success', error: null } });
    case 'app/markRequestFailed':
      return merge(state, { [meta.key]: { status: 'failure', error: payload } });
    default:
      return state;
  }
};

export default combineReducers({
  ui: combineReducers({
    currentComponentId,
  }),
  requests,
})
