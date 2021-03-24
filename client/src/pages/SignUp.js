import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/reducers/userSlice';

const SignUp = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registration = {
        email: email,
        password: password
    };

    const handleClick = () => {
        dispatch(registerUser(registration))
    };


    return (
        <div>
            <h2>Registration Page</h2>
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
            <button onClick={handleClick} >Sign Up</button>
        </div>
    )
}

export default SignUp;
