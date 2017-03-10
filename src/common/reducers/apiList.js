import {FETCH_LIST} from "../actions/fetchList";

export default function apiList(state = {
  items: [],
  isFetching: false,
}, action) {
  switch (action.type) {
    case FETCH_LIST:
      if (action.ready) {
        return {
          ...state,
          ...{
            items: action.result,
            isFetching: false,
          }
        }
      } else {
        return {
          ...state,
          ...{
            items: [],
            isFetching: true,
          }
        }
      }

    default:
      return state
  }
}