import React, { useState } from 'react';
import ReactPlayer from "react-player";
import {ReactComponent as MuteIcon} from "../static/images/icon-mute.svg";
import {ReactComponent as UnmuteIcon} from "../static/images/icon-unmute.svg";

const VideoPlay = () => {
    const playList = [
        "https://www.youtube.com/embed/aR-KAldshAE",
        "https://www.youtube.com/embed/3VTkBuxU4yk",
        "https://www.youtube.com/embed/F5tSoaJ93ac",
        "https://www.youtube.com/embed/zF5Ddo9JdpY",
        "https://www.youtube.com/embed/TFzkbos0oeo",
        "https://www.youtube.com/embed/wkihKQ7Exvo",
        "https://www.youtube.com/embed/5-mT9D4fdgQ"
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