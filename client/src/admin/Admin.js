import React, { useEffect, useState } from 'react';
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

    const handleClick = () => {
        dispatch(loginAdmin(login));

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
        <div>
            <h2>Admin Login Page</h2>
            <form>
                <input
                    type="username"
                    name="name"
                    placeholder="name"
                    value={login.name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    autoComplete="on"
                    placeholder="password"
                    value={login.password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <button onClick={handleClick} >login</button>
        </div>
    )
}

export default Admin;
