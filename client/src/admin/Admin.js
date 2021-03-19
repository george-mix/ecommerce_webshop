import React from 'react';
import { useDispatch } from 'react-redux';
import { loginAdmin } from '../store/reducers/adminSlice';

const Admin = () => {
    const dispatch = useDispatch();
    let param = {
        name: "admin",
        password: "123"
    }

    return (
        <div>
            <h2>Admin Login Page</h2>
            <button onClick={() => dispatch(loginAdmin(param))} >login</button>
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
