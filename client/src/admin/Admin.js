import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginAdmin } from '../store/reducers/adminSlice';

const Admin = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let param = {
        name: "admin",
        password: "123"
    }

    const handleClick = () => {
        dispatch(loginAdmin(param));
        history.push('/admin/panel')

    }

    return (
        <div>
            <h2>Admin Login Page</h2>
            <button onClick={handleClick} >login</button>
            <form>
                <input
                    type="username"
                    name="name"
                    placeholder="name"
                />
                <input
                    type="password"
                    name="password"
                    autoComplete="on"
                    placeholder="password"
                />
                <button type="submit">Sign in</button>
            </form>
        </div>
    )
}

export default Admin;
