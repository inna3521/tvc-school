// import * as ku from '../lib/ke-utils';

export const getCurrentComponentId = (state) => {
  return state.ui.currentComponentId;
}

// redux selectors
export const getRequest = (state, key) =>
  state.requests[key] || {};

export const getRequests = (state) =>
  state.requests;

export const areRequestsPending = (requests) => {
  return Object.keys(requests)
    .some((key) => requests[key].status === 'pending');
};
