import { ADMIN_ROUTE, ADMIN_PANEL_ROUTE, ADMIN_SINGLE_PRODUCT_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE } from "./helpers/consts";
import Admin from './admin/Admin';
import Auth from './pages/Auth';
import Basket from './pages/Basket';
import ProductDetails from './pages/ProductDetails';
import Shop from './pages/Shop';
import AdminPanel from "./admin/AdminPanel";
import SingleProductPage from "./admin/SingleProductPage";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ADMIN_PANEL_ROUTE,
        Component: AdminPanel
    },
    {
        path: ADMIN_SINGLE_PRODUCT_ROUTE + '/:postId',
        Component: SingleProductPage
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