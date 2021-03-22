import { ADMIN_ROUTE, ADMIN_PANEL_ROUTE, ADMIN_SINGLE_PRODUCT_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE } from "./helpers/consts";
import Admin from './admin/Admin';
import AdminPanel from "./admin/AdminPanel";
import AdminSingleProductPage from "./admin/SingleProductPage";
import Basket from './pages/Basket';
import ProductDetails from './pages/ProductDetails';
import Shop from './pages/Shop';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
];

export const adminPrivateRoutes = [
    {
        path: ADMIN_PANEL_ROUTE,
        Component: AdminPanel
    },
    {
        path: ADMIN_SINGLE_PRODUCT_ROUTE + '/:postId',
        Component: AdminSingleProductPage
    },
]

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
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: SignUp
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductDetails
    },
];