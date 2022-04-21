import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as gameActions from '../store/actions'

import Header from "./Header";
import DisplayGameRow from "./DisplayGameRow";

const MainContent = ( {selectGameHandler} ) => {
    const { gameDetails } = useSelector((state) => state.gameDetails)
    const leagueOfLegend = useSelector((state) => state.leagueOfLegend)
    const battleGround = useSelector((state)=>state.battleGround)
    const overwatch = useSelector((state) => state.overwatch)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(gameActions.fetchGameDetails('game', '63351'))
        dispatch(gameActions.fetchLegueOfLegend())
        dispatch(gameActions.fetchBattleGround())
        dispatch(gameActions.fetchOverwatch())
        }, [dispatch])
    return (
        <div className='container'>
            <Header game={gameDetails}/>
            <div className='gameShowcase'>
                <DisplayGameRow
                    isgame={true}
                    title='League Of Legend'
                    selectGameHandler={selectGameHandler}
                    games={leagueOfLegend.data}/>
                <DisplayGameRow
                    title='Battle Ground'
                    selectGameHandler={selectGameHandler}
                    games={battleGround.data}/>
                <DisplayGameRow
                    title='Overwatch'
                    selectGameHandler={selectGameHandler}
                    games={overwatch.data}/>
            </div>
        </div>
    );
};

export default MainContent;