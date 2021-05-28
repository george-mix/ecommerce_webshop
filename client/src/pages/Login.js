import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { BASKET_ROUTE, REGISTRATION_ROUTE } from '../helpers/consts';
import { loginUser } from '../store/reducers/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = {
        email: email,
        password: password
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try { 
        await dispatch(loginUser(login));
        history.push(BASKET_ROUTE);
        }catch (e) {
           alert("Wrong email or password!")
        }
        history.push(BASKET_ROUTE);
    };

    return (
        <div className="auth">
            <form className="auth__form">
                <h3 className="auth__form__title">Login</h3>
                <h4 className="auth__form__text">Login with email</h4>
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
                <div className="auth__form button">
                    <button onClick={(e) => handleClick(e)}>login</button>
                </div>
                <div className="auth__form__link">
                    <span>Dont't have an account? </span>
                    <Link to={REGISTRATION_ROUTE}>Sign Up</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;
