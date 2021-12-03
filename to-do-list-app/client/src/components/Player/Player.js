import React from "react";
import ReactPlayer from "react-player";

function Player({ url, playing, setPlaying }) {
    return (
        <div style={{ pointerEvents: "none" }}>
            <ReactPlayer
                className="absolute top-0 left-0 w-screen h-screen display-none"
                url={url}
                playing={playing}
                width="100%"
                height="100vh"
                // playsInline={true}
                loop={true}
                controls={true}
                onReady={() => setPlaying(true)}
                onContextMenu={(e) => e.preventDefault()}
                // config={{ youtube: { playerVars: { disablekb: 1 } } }}
            />
        </div>
    );
}

export default Player;
