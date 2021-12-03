import React from "react";
import { FaPlayCircle } from "react-icons/fa";

function PlayerForm({ url, setUrl, setPlaying }) {
    return (
        <div className="p-8 shadow-lg rounded-lg bg-gray-50 border-2 bg-opacity-100">
            <div className="handle  cursor-move">
                <div className={`title font-bold text-lg mb-3`}>
                    Music Player
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    URL
                </label>
                <div>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => setPlaying(true)}
                    >
                        <FaPlayCircle />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlayerForm;
