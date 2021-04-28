import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/reducers/userSlice';
import { LOGIN_ROUTE } from '../helpers/consts';

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
        <div className="auth">
            <form className="auth__form">
                <h3 className="auth__form__title">Registration</h3>
                <h4 className="auth__form__text">Sign Up with email</h4>
                <div className="auth__form__input">
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="auth__form__input">
                    <input
                        type="password"
                        name="password"
                        autoComplete="on"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="auth__form__button">
                    <button onClick={handleClick}>Sign Up</button>
                </div>
                <div className="auth__form__link">
                    <span>Already have an account? </span>
                    <Link to={LOGIN_ROUTE}>Sign In</Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
