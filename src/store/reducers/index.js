import {combineReducers} from "redux";
import SearchMovieReducer from './reducerSearchMovie'
import reducerNetflixOriginals from "./reducerNetflixOriginals";
import MovieDetailsReducer from './reducerMovieDetails'
import ActionMoviesReducer from './reducerActionMovies'
import TrendingReducer from './reducerTrending'
import ComedyMoviesReducer from './reducerComedyMovies'
import HorrorMoviesReducer from './reducerHorrorMovies'
import RomanceMoviesReducer from './reducerRomanceMovies'
import DocumentaryReducer from './reducerDocumentary'
import TopRatedReducer from './reducerTopRated'

const rootReducer = combineReducers({
    trending: TrendingReducer,
    action: ActionMoviesReducer,
    netflixOriginals: reducerNetflixOriginals,
    searchMovie: SearchMovieReducer,
    movieDetails: MovieDetailsReducer,
    comedy: ComedyMoviesReducer,
    horror: HorrorMoviesReducer,
    romance: RomanceMoviesReducer,
    documentary: DocumentaryReducer,
    topRated: TopRatedReducer,
})

export default rootReducer