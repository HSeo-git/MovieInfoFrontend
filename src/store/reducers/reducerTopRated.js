import { FETCH_TOP_RATED } from '../actions/movieActions';

export default function TopRatedReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_TOP_RATED:
            const data = action.payload.data.results;
            return { ...state, data };
        default:
            return state;
    }
}