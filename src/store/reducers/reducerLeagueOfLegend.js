import {FETCH_LEAGUE_OF_LEGEND} from "../actions";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_LEAGUE_OF_LEGEND:
            const data = action.payload.data.results;
            return {...state, data}
        default:
            return state;
    }
}