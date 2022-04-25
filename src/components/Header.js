import React from 'react';

import {ReactComponent as PlayLogo} from "../static/images/icon-play.svg";
import {ReactComponent as AddLogo} from "../static/images/icon-add.svg";

import VideoPlay from "./VideoPlay";

const Header = () => {

    return (
        <header className='header'>
            <VideoPlay/>
            <h1 className='header__container-heading'>Preview</h1>
            <button
                onClick={()=> alert("Let's find the details of the movie")}
                className='header__container-btnPlay'>
                <PlayLogo className='header__container-btnMyList-play'/>
                Play
            </button>
            <button className='header__container-btnMyList'>
                <AddLogo className='header__container-btnMyList-add'/>
                My List
            </button>
            )}
            <p className='header__container-overview'>now and upcoming movies</p>
            <div className='header__container--fadeBottom'></div>
        </header>
    );
};

export default Header;