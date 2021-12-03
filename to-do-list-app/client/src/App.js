// eslint-disable-next-line
import React, { useState } from "react";

import { WidthProvider, Responsive } from "react-grid-layout";
import Sidebar from "./components/Sidebar/Sidebar";
import TodoList from "./components/Todos/TodoList";
import Player from "./components/Player/Player";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";
import PlayerForm from "./components/Player/PlayerForm";
import Time from "./components/Time/Time";

function App() {
    const [url, setUrl] = useState(
        "https://www.youtube.com/watch?v=zxpEafdy5nQ"
    );
    const [playing, setPlaying] = useState(false);

    const ResponsiveReactGridLayout = WidthProvider(Responsive);

    return (
        <div className="relative min-h-screen md:flex">
            <Sidebar />
            <div className="w-screen h-screen relative p-5 bg-no-repeat bg-cover bg-black">
                <Player url={url} playing={playing} setPlaying={setPlaying} />
                <ResponsiveReactGridLayout
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    compactType={null}
                    useCSSTransforms={true}
                    isDraggable={true}
                    isResizable={true}
                    isBounded={true}
                    maxRows={6}
                    draggableHandle=".handle"
                >
                    <div
                        className="transition-all"
                        style={{
                            transitionDuration: "25ms",
                        }}
                        key="a"
                        data-grid={{
                            x: 0,
                            y: 0,
                            w: 3,
                            h: 1,
                            i: "a",
                        }}
                    >
                        <TodoList />
                    </div>
                    <div
                        className="transition-all"
                        style={{
                            transitionDuration: "25ms",
                        }}
                        key="b"
                        data-grid={{
                            x: 3,
                            y: 0,
                            w: 3,
                            h: 1,
                            i: "b",
                        }}
                    >
                        <PlayerForm
                            url={url}
                            setUrl={setUrl}
                            setPlaying={setPlaying}
                        />
                    </div>
                    <div
                        className="transition-all"
                        style={{
                            transitionDuration: "25ms",
                        }}
                        key="c"
                        data-grid={{
                            x: 6,
                            y: 0,
                            w: 3,
                            h: 3,
                            i: "c",
                        }}
                    >
                        <PomodoroTimer />
                    </div>
                    <div
                        className="transition-all"
                        style={{
                            transitionDuration: "25ms",
                        }}
                        key="d"
                        data-grid={{
                            x: 9,
                            y: 5,
                            w: 3,
                            h: 1,
                            i: "d",
                        }}
                    >
                        <Time />
                    </div>
                </ResponsiveReactGridLayout>
            </div>
        </div>
    );
}

export default App;
