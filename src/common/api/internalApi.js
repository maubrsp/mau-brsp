import 'isomorphic-fetch';
import {INTERNAL_API_ROOT} from "../constants";


export function apiFetchAnnounceList() {
  return fetch(`${INTERNAL_API_ROOT}/list`).then(resolveResponse);
}

function resolveResponse(response) {
  if (response.status >= 400) {
    throw new Error("Bad response from server");
  }
  return response.json();
}