import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authRoutes, publicRoutes, adminRoutes, adminPrivateRoutes } from '../routes';
import { SHOP_ROUTE } from './consts';
import { PrivateAdminRoute } from './PrivateAdminRoute';


const AppRouter = () => {
    const isAuth = useSelector(state => state.user);

    return (
        <Switch>
            {adminRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            {adminPrivateRoutes.map(({ path, Component }) =>
                <PrivateAdminRoute key={path} path={path} component={Component} exact />
            )}
            {isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={SHOP_ROUTE} />
        </Switch>
    );
};

export default AppRouter;