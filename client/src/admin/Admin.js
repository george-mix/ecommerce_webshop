import React, { useState } from 'react';
import { login } from './http/adminAPI';

const Admin = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const test = async () => {
            try {
                const res = await login(formData);
                console.log(res);
            } catch (e) {

            }
        };
        test();
    }

    return (
        <div>
            <h2>Login as an Admin</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="username"
                    name="name"
                    placeholder="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    autoComplete="on"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Sign in</button>
            </form>
        </div>
    )
}

export default Admin;
