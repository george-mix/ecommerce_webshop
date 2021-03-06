import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ADMIN_PANEL_ROUTE } from '../helpers/consts';
import { loginAdmin, adminSelector, clearState } from '../store/reducers/adminSlice';

const Admin = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isSuccess } = useSelector(adminSelector);

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const login = {
        name: name,
        password: password
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await dispatch(loginAdmin(login));
        }catch(e){
            alert("Wrong name or password!");
        }
    };

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, [dispatch]);

    useEffect(() => {
        if (isSuccess) {
            history.push(ADMIN_PANEL_ROUTE);
        }
    }, [isSuccess, history])

    return (
        <>
            <Helmet title="Admin"/>
            <div className="auth">
                <form className="auth__form">
                    <h3 className="auth__form__title"> Login</h3>
                    <h4 className="auth__form__text">Login as an Admin</h4>
                    <div className="auth__form__input">
                        <input
                            type="username"
                            name="name"
                            placeholder="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                        <button onClick={(e) => handleClick(e)} >login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Admin;
