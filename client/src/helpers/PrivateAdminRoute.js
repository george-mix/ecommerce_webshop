import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateAdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem('token') ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: '/admin', state: { from: props.location } }}
                />
            )
        }
    />
);