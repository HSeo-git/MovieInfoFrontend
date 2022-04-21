import {FETCH_BATTLE_GROUND} from "../actions";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_BATTLE_GROUND:
            const data = action.payload.data.results;
            return {...state, data}
        default:
            return state;
    }
}