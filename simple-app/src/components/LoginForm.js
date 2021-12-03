import React, { useState } from "react";

const LoginForm = ({ listUser, setUserLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onHanleSubmit = (e) => {
        e.preventDefault();

        // check user
        const user = listUser.find(
            (user) => user.username === username && user.name === password
        );

        if (user) setUserLogin(user);
    };

    return (
        <div>
            <h1>Login</h1>

            <label htmlFor="username">Username : </label>
            <input
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password : </label>
            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={onHanleSubmit}>Submit</button>
        </div>
    );
};

export default LoginForm;
