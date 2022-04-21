import React, { useState } from 'react';

import {ReactComponent as PlayLogo} from "../static/images/icon-play.svg";
import {ReactComponent as AddLogo} from "../static/images/icon-add.svg";
import {ReactComponent as MuteIcon} from "../static/images/icon-mute.svg";
import {ReactComponent as UnmuteIcon} from "../static/images/icon-unmute.svg";
import ReactPlayer from "react-player";

const Header = ({ game : { title, overview }}) => {
    const [isMuted, setIsMuted] = useState(true)

    return (
        <header className='header'>
            <ReactPlayer
            playing={true}
            loop={true}
            width='100%'
            height='100%'
            volume={1}
            muted={isMuted}
            className='header__video'
            url = 'https://www.youtube.com/watch?v=G5WUsX7ulq8'
            />
            <h1 className='header__container-heading'>{title}</h1>
            <button
                onClick={()=> alert('Are you ready to learn?')}
                className='header__container-btnPlay'>
                <PlayLogo className='header__container-btnMyList-play'/>
                Play
            </button>
            <button className='header__container-btnMyList'>
                <AddLogo className='header__container-btnMyList-add'/>
                My List
            </button>

            {isMuted ? (
                <MuteIcon
                    onClick={() => setIsMuted(false)}
                    className='header__container-btnVolume'
                />
            ) : (
                <UnmuteIcon
                    onClick={() => setIsMuted(true)}
                    className='header__container-btnVolume'
                />
            )}
            <p className='header__container-overview'>{overview}</p>
            <div className='header__container--fadeBottom'></div>
        </header>
    );
};

export default Header;