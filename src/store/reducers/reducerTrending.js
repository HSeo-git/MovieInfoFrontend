import { FETCH_TRENDING } from '../actions/movieActions'

export default function TrendingReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_TRENDING:
            const data = action.payload.data.results;
            return { ...state, data };
        default:
            return state;
    }
}