import React from "react";
import { links } from "./data";

const Sidebar = () => {
    return (
        <>
            <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                <a href="/" className="block p-4 text-white font-bold">
                    Better Dev
                </a>

                <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                    <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <div className="sidebar bg-gray-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
                <a
                    href="/"
                    className="text-white flex items-center space-x-2 px-4"
                >
                    <svg
                        className="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                    </svg>
                    <span className="text-2xl font-extrabold">Better Dev</span>
                </a>

                <nav>
                    {links.map((link, index) => {
                        const { id, url, text } = link;
                        return (
                            <a
                                key={id}
                                href={url}
                                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
                            >
                                <span className="mx-4 font-medium">{text}</span>
                            </a>
                        );
                    })}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
