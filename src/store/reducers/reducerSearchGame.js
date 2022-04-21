import {
    FETCH_SEARCH_GAME,
    FETCH_SEARCH_GAME_SUCCESS,
    FETCH_SEARCH_GAME_FAIL,
} from "../actions";

const initialState = {
    isLoading: false,
    searchResults: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_SEARCH_GAME:
            return {...state, isLoading: true}
        case FETCH_SEARCH_GAME_FAIL:
            return {...state, isLoading: false}
        case FETCH_SEARCH_GAME_SUCCESS:
            const searchResults = action.payload.data.results
            return {...state, searchResults, isLoading: false}
        default:
            return state
    }
}