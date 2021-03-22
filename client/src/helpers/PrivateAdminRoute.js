import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ADMIN_ROUTE } from './consts';

export const PrivateAdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem('token') ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: ADMIN_ROUTE, state: { from: props.location } }}
                />
            )
        }
    />
);