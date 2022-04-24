import { FETCH_NETFLIX_ORIGINALS } from "../actions";

export default function reducerNetflixOriginals(state = {}, action) {
    switch (action.type) {
        case FETCH_NETFLIX_ORIGINALS:
            const data = action.payload.data.results;
            return {...state, data}
        default:
            return state;
    }
}