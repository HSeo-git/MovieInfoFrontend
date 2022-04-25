import { FETCH_DOCUMENTARIES } from '../actions/movieActions';

export default function DocumentaryReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_DOCUMENTARIES:
            const data = action.payload.data.results;
            return { ...state, data };
        default:
            return state;
    }
}