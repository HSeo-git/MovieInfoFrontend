import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as gameActions from '../store/actions'

import Header from "./Header";
import DisplayRow from "./DisplayRow";

const MainContent = ( {selectMovieHandler} ) => {
    const netflixOriginals = useSelector((state) => state.netflixOriginals)
    const { gameDetails } = useSelector((state) => state.gameDetails)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(gameActions.fetchGameDetails('game', '63351'))
        dispatch(gameActions.fetchNetflixOriginals())
        dispatch(gameActions.fetchBattleGround())
        dispatch(gameActions.fetchOverwatch())
        }, [dispatch])
    return (
        <div className='container'>
            <Header game={gameDetails}/>
            <div className='movieShowcase'>
                <DisplayRow
                    title='Netflix originals'
                    isNetflixMovies={true}
                    selectMovieHandler={selectMovieHandler}
                    movies={netflixOriginals.data}/>
            </div>
        </div>
    );
};

export default MainContent;