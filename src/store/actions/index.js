import axios from "axios";

//games
export const FETCH_LEAGUE_OF_LEGEND = 'FETCH_LEAGUE_OF_LEGEND'
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

export const fetchGameDetails = (gameType, gameId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_GAME_DETAILS })
            const response = {
                data: {
                    title: "Game Coaching",
                    name: gameId,
                    vote_average: "myVoteAvg",
                    release_date: "my_release_date",
                    overview: "League of Legend",
                }
            }
            dispatch({ type: FETCH_GAME_DETAILS_SUCCESS, payload: response })
        } catch (error) {
            console.log('error', error)
            dispatch({ type: FETCH_GAME_DETAILS_FAIL })
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

export const fetchLegueOfLegend = () => {
    return async (dispatch) => {
        try {
            const request = await axios.get(
                `/discover/roll_playing?api_key=${process.env.API_KEY}&with_networks=213`
            )

            dispatch({ type: FETCH_LEAGUE_OF_LEGEND, payload: request })
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

