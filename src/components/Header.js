import React, { useState } from 'react';

import {ReactComponent as PlayLogo} from "../static/images/icon-play.svg";
import {ReactComponent as AddLogo} from "../static/images/icon-add.svg";

import VideoPlay from "./VideoPlay";

const Header = ({ game : { title, overview }}) => {

    return (
        <header className='header'>
            <VideoPlay/>
            <h1 className='header__container-heading'>{title}</h1>
            <button
                onClick={()=> alert('Are you ready to play?')}
                className='header__container-btnPlay'>
                <PlayLogo className='header__container-btnMyList-play'/>
                List
            </button>
            <button className='header__container-btnMyList'>
                <AddLogo className='header__container-btnMyList-add'/>
                My Lessons
            </button>
            )}
            <p className='header__container-overview'>{overview}</p>
            <div className='header__container--fadeBottom'></div>
        </header>
    );
};

export default Header;