import {combineReducers} from "redux";
import LeagueOfLegendReducer from './reducerLeagueOfLegend'
import BattleGroundReducer from './reducerBattleGround'
import OverwatchReducer from './reducerOverwatch'
import GameDetailsReducer from './reducerGameDetails'
import SearchGameReducer from './reducerSearchGame'
import reducerNetflixOriginals from "./reducerNetflixOriginals";

const rootReducer = combineReducers({
    leagueOfLegend: LeagueOfLegendReducer,
    battleGround: BattleGroundReducer,
    overwatch: OverwatchReducer,
    gameDetails: GameDetailsReducer,
    searchGame: SearchGameReducer,
    netflixOriginals: reducerNetflixOriginals,
})

export default rootReducer