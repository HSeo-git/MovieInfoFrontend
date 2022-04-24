import {
    FETCH_GAME_DETAILS,
    FETCH_GAME_DETAILS_SUCCESS,
    FETCH_GAME_DETAILS_FAIL,
} from "../actions";

const initialState = {
    isLoading: false,
    gameDetails: [],
}

export default function gameDetails (state = initialState, action) {
    switch (action.type) {
        case FETCH_GAME_DETAILS:
            return {...state, isLoading: true}
        case FETCH_GAME_DETAILS_FAIL:
            return {...state, isLoading: false}
        case FETCH_GAME_DETAILS_SUCCESS:
            const gameDetails = action.payload.data
            return {...state, gameDetails, isLoading: false}
        default:
            return state
    }
}