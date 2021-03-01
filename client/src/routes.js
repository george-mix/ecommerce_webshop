import { ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE } from "./utils/consts";
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Basket from './pages/Basket';
import ProductDetails from './pages/ProductDetails';
import Shop from './pages/Shop';

export const adminRoute = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
];

export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: Basket
    },

];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductDetails
    },
];