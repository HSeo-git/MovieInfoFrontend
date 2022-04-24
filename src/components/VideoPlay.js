import React, { useState } from 'react';
import ReactPlayer from "react-player";
import {ReactComponent as MuteIcon} from "../static/images/icon-mute.svg";
import {ReactComponent as UnmuteIcon} from "../static/images/icon-unmute.svg";

const VideoPlay = () => {
    const playList = [
        "https://www.youtube.com/embed/OVMu1s0nZNQ",
        "https://www.youtube.com/embed/DSEfRVqjbFA",
        "https://www.youtube.com/embed/Xojsvie3UpM",
        "https://www.youtube.com/embed/h3rKe6DdC18",
        "https://www.youtube.com/embed/WTR5snCDDes",
        "https://www.youtube.com/embed/06Ws-x_Z6bI",
        "https://www.youtube.com/embed/j3gF0CZfp8Y"
    ];
    const [isMuted, setIsMuted] = useState(true)
    return (
        <div>
            <ReactPlayer
                url = {playList}
                loop
                playing
                volume={1}
                controls
                muted={isMuted}
                progressInterval={1000}
                pip={true}
                width='100%'
                height='100%'
                className='header__video'
            />
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
        </div>
    );
};

export default VideoPlay;