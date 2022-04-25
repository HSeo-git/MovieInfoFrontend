import { FETCH_ROMANCE_MOVIES } from '../actions/movieActions';

export default function RomanceMoviesReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_ROMANCE_MOVIES:
            const data = action.payload.data.results;
            return { ...state, data };
        default:
            return state;
    }
}