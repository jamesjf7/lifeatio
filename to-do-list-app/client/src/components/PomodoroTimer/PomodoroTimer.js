import React from "react";
import moment from "moment";
import { useState, useEffect } from "react";
import { FaPlay, FaPause, FaRedoAlt, FaPlus, FaMinus } from "react-icons/fa";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import Timer from "./Timer";

function PomodoroTimer() {
    const [key, setKey] = useState(0);
    const [time, setTime] = useState(25 * 60);
    const [breakTime, setBreakTime] = useState(5);
    const [sessionTime, setsessionTime] = useState(25);
    const [status, setStatus] = useState("work");
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timerId;
        if (isRunning) {
            timerId = setInterval(() => {
                if (time === 1) {
                    setIsRunning(!isRunning);
                    // audio.play();
                }
                setTime((prevTime) => (prevTime -= 1));
            }, 1000);
        }

        return () => clearInterval(timerId);
    });

    return (
        <div className="p-8 shadow-lg rounded-lg bg-gray-50 border-2">
            <div className="handle cursor-move">
                <div className="title font-bold text-lg mb-3">
                    Pomodoro Timer
                </div>
            </div>
            <div>
                {/* <Timer time={time} status={status} isRunning={isRunning} /> */}
                <div className="justify-center flex">
                    <CountdownCircleTimer
                        key={key}
                        isPlaying={isRunning}
                        duration={time}
                        colors={[
                            ["#004777", 0.33],
                            ["#F7B801", 0.33],
                            ["#A30000"],
                        ]}
                        onComplete={() => {
                            if (status === "work") {
                                setStatus("break");
                                setTime(breakTime * 60);
                            } else if (status === "break") {
                                setStatus("work");
                                setTime(sessionTime * 60);
                            }
                            setKey(key + 1);
                            return [true, 1000];
                        }}
                    >
                        {({ remainingTime }) => (
                            <div className="text-center">
                                <div className="text-gray-400 text-md">
                                    {status}
                                </div>
                                <div className="text-3xl">
                                    {moment()
                                        .hour(0)
                                        .minute(0)
                                        .second(remainingTime)
                                        .format("HH:mm:ss")}
                                </div>
                            </div>
                        )}
                    </CountdownCircleTimer>
                </div>
                <div className="flex justify-around">
                    <button
                        className="rounded-full text-white bg-blue-500 hover:bg-blue-700 p-3"
                        onClick={() => {
                            setIsRunning(!isRunning);
                        }}
                    >
                        {!isRunning ? <FaPlay /> : <FaPause />}
                    </button>
                    <button
                        className="rounded-full text-white bg-red-500 hover:bg-red-700 p-3"
                        onClick={() => {
                            setTime(sessionTime * 60);
                            setStatus("work");
                            setIsRunning(false);
                            setKey(key + 1);
                        }}
                    >
                        <FaRedoAlt />
                    </button>
                </div>
                <div className="flex my-4">
                    <div className="flex-1">
                        <div className="text-center mb-4">Break Time</div>
                        <div className="flex flex-row justify-evenly">
                            <div>
                                <button
                                    className="rounded-full text-white bg-blue-500 hover:bg-blue-700 p-2"
                                    onClick={() => {
                                        setBreakTime(breakTime - 1);
                                    }}
                                >
                                    <FaMinus />
                                </button>
                            </div>
                            <div className="text-center mt-1">{breakTime}</div>
                            <div>
                                <button
                                    className="rounded-full text-white bg-blue-500 hover:bg-blue-700 p-2"
                                    onClick={() => {
                                        setBreakTime(breakTime + 1);
                                    }}
                                >
                                    <FaPlus />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="text-center mb-4">Session Time</div>
                        <div className="flex justify-evenly">
                            <button
                                className="rounded-full text-white bg-blue-500 hover:bg-blue-700 p-2"
                                onClick={() => {
                                    setsessionTime(sessionTime - 1);
                                    if (!isRunning) {
                                        setTime((sessionTime - 1) * 60);
                                        setKey(key + 1);
                                    }
                                }}
                            >
                                <FaMinus />
                            </button>
                            <div className="text-center mt-1">
                                {sessionTime}
                            </div>
                            <button
                                className="rounded-full text-white bg-blue-500 hover:bg-blue-700 p-2"
                                onClick={() => {
                                    setsessionTime(sessionTime + 1);
                                    if (!isRunning) {
                                        setTime((sessionTime + 1) * 60);
                                        setKey(key + 1);
                                    }
                                }}
                            >
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PomodoroTimer;
