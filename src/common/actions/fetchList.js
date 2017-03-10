import {apiFetchAnnounceList} from "../api/internalApi";
export const FETCH_LIST = 'FETCH_LIST';

function fetchList() {
  return {
    type: FETCH_LIST,
    promise: apiFetchAnnounceList()
  }
}

function shouldFetchList(state) {
  const {apiList} = state;
  if (apiList.isFetching) {
    return false
  } else if (!apiList.items.length) {
    return true
  }
  return false
}

export function fetchListIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchList(getState())) {
      return dispatch(fetchList())
    }
  }
}