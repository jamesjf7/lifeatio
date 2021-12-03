import React from "react";
import Clock from "react-live-clock";

function Time() {
    return (
        <div className="handle cursor-move">
            <Clock
                className="text-white text-2xl font-mono font-black"
                format={"dddd, MMMM Mo, YYYY"}
                ticking={true}
            ></Clock>
            <br />
            <Clock
                className="text-white text-2xl font-mono font-black"
                format={"h:mm:ss A"}
                ticking={true}
            ></Clock>
        </div>
    );
}

export default Time;
