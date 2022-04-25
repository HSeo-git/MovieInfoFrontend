import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as movieActions from '../store/actions/movieActions'

import Header from "./Header";
import DisplayRow from "./DisplayRow";

const MainContent = ( {selectMovieHandler} ) => {
    const netflixOriginals = useSelector((state) => state.netflixOriginals)
    const { movieDetails } = useSelector((state) => state.movieDetails)
    const trending = useSelector((state) => state.trending)
    const topRated = useSelector((state) => state.topRated)
    const actionMovies = useSelector((state) => state.action)
    const comedyMovies = useSelector((state) => state.comedy)
    const horrorMovies = useSelector((state) => state.horror)
    const romanceMovies = useSelector((state) => state.romance)
    const documentaries = useSelector((state) => state.documentary)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.fetchMovieDetails('tv', '63351'))
        dispatch(movieActions.fetchNetflixOriginals())
        dispatch(movieActions.fetchTrending())
        dispatch(movieActions.fetchTopRated())
        dispatch(movieActions.fetchActionMovies())
        dispatch(movieActions.fetchComedyMovies())
        dispatch(movieActions.fetchHorrorMovies())
        dispatch(movieActions.fetchRomanceMovies())
        dispatch(movieActions.fetchDocumentaries())
    }, [dispatch])
    return (
        <div className='container'>
            <Header movie={movieDetails} />
            <div className='movieShowcase'>
                <DisplayRow
                    title='Netflix originals'
                    isNetflixMovies={true}
                    selectMovieHandler={selectMovieHandler}
                    movies={netflixOriginals.data}/>
                <DisplayRow
                    title='Trending'
                    selectMovieHandler={selectMovieHandler}
                    movies={trending.data}
                />
                <DisplayRow
                    title='Top Rated'
                    selectMovieHandler={selectMovieHandler}
                    movies={topRated.data}
                />
                <DisplayRow
                    title='Action Movies'
                    selectMovieHandler={selectMovieHandler}
                    movies={actionMovies.data}
                />
                <DisplayRow
                    title='Comedy'
                    selectMovieHandler={selectMovieHandler}
                    movies={comedyMovies.data}
                />
                <DisplayRow
                    title='Horror Movies'
                    selectMovieHandler={selectMovieHandler}
                    movies={horrorMovies.data}
                />
                <DisplayRow
                    title='Romance'
                    selectMovieHandler={selectMovieHandler}
                    movies={romanceMovies.data}
                />
                <DisplayRow
                    title='Documentaries'
                    selectMovieHandler={selectMovieHandler}
                    movies={documentaries.data}
                />
            </div>
        </div>
    );
};

export default MainContent;