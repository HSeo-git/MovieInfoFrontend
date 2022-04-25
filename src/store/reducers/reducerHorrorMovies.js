import { FETCH_HORROR_MOVIES } from '../actions/movieActions';

export default function HorrorMoviesReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_HORROR_MOVIES:
            const data = action.payload.data.results;
            return { ...state, data };
        default:
            return state;
    }
}