import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/reducers/userSlice';

const Login = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = {
        email: email,
        password: password
    };

    const handleClick = () => {
        dispatch(loginUser(login));
    };

    return (
        <div>
            <h2>Login Page</h2>
            <form>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    autoComplete="on"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <button onClick={handleClick} >login</button>
        </div>
    )
}

export default Login;
