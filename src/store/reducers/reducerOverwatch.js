import { FETCH_OVERWATCH } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_OVERWATCH:
      const data = action.payload.data.results;
      return { ...state, data };
    default:
      return state;
  }
}