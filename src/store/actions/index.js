//games
import axios from "../../axios-movies";

export const FETCH_ROMANTIC_MOVIES = 'FETCH_LEAGUE_OF_LEGEND'
export const FETCH_BATTLE_GROUND = 'FETCH_BATTLE_GROUND'
export const FETCH_OVERWATCH = 'FETCH_OVERWATCH'
//game details
export const FETCH_GAME_DETAILS = 'FETCH_GAME_DETAILS'
export const FETCH_GAME_DETAILS_SUCCESS = 'FETCH_GAME_DETAILS_SUCCESS'
export const FETCH_GAME_DETAILS_FAIL = 'FETCH_GAME_DETAILS_FAIL'
//search
export const FETCH_SEARCH_GAME = 'FETCH_SEARCH_GAME'
export const FETCH_SEARCH_GAME_FAIL = 'FETCH_SEARCH_GAME_FAIL'
export const FETCH_SEARCH_GAME_SUCCESS = 'FETCH_SEARCH_GAME_SUCCESS'

// netflix
export const FETCH_NETFLIX_ORIGINALS = "FETCH_NETFLIX_ORIGINALS"

export const fetchGameDetails = (gameType, gameId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_GAME_DETAILS })
            const response = {
                data: {
                    title: "Movie", //(shown on the above a video)It should be drawn from the server
                    name: "movie name", //It should be drawn from the server
                    vote_average: "myVoteAvg", //It should be drawn from the server
                    release_date: "my_release_date", //It should be drawn from the server
                    overview: "overview", //(shown on the above a video)It should be drawn from the server
                }
            }
            dispatch({ type: FETCH_GAME_DETAILS_SUCCESS, payload: response })
        } catch (error) {
            console.log('error', error)
            dispatch({ type: FETCH_GAME_DETAILS_FAIL })
        }
    }
}

export const fetchNetflixOriginals = () => {
    return async (dispatch) => {
        try {
            const request = await axios.get(
                `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`
            )
            dispatch({type: FETCH_NETFLIX_ORIGINALS, payload: request})
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const fetchSearchGame = (searchTerm) => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_SEARCH_GAME })
            const request = await axios.get(
                `/search/multi?api_key=${process.env.API_KEY}&language=en-US&include_adult=false&query=${searchTerm}`
            )
            dispatch({ type: FETCH_SEARCH_GAME_SUCCESS, payload: request })
        } catch (error) {
            dispatch({ type: FETCH_SEARCH_GAME_FAIL })
            console.log('error', error)
        }
    }
}

export const fetchRomanticMovies = () => {
    return async (dispatch) => {
        try {
            // TODO:: Get a movie from server, currently set dummy data.
            const request = {
                results: {

                }
            }

            dispatch({ type: FETCH_ROMANTIC_MOVIES, payload: request })
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const fetchBattleGround = () => {
    return async (dispatch) => {
        try {
            const request = await axios.get(
                `/discover/game?api_key=${process.env.API_KEY}&language=en-US`
            )
            dispatch({ type: FETCH_BATTLE_GROUND, payload: request })
        } catch (error) {}
    }
}

export const fetchOverwatch = () => {
    return async (dispatch) => {
        try {
            const request = await axios.get(
                `/discover/game?api_key=${process.env.API_KEY}&language=en-US`
            )
            dispatch({ type: FETCH_OVERWATCH, payload: request })
        } catch (error) {}
    }
}

