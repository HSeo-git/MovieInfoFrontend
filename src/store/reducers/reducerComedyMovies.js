import { FETCH_COMEDY_MOVIES } from '../actions/movieActions'

export default function ComedyMoviesReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_COMEDY_MOVIES:
            const data = action.payload.data.results;
            return { ...state, data };
        default:
            return state;
    }
}