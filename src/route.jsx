import LoginPage from "./mainConsept/Login_page/SignupPage"
import HomePage from './mainConsept/Body/TopBody';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import NotFound from './mainConsept/404err/NotFound'
import UserProfile from "./mainConsept/UserProfile/UserProfile";
import ShoppingCart from "./mainConsept/ShoppingCart/ShoppingCart";
import ItemInfo from "./mainConsept/ItemInfo/ItemInfo";

let allRout = [
    {
        path: '/', element: <MainLayout />, children: [
            { index: true, element: <HomePage /> },
            { path: 'userprofile', element: <UserProfile /> },
            { path: 'Shoppingcart', element: <ShoppingCart /> },
            { path: 'iteminfo/:category/:id', element: <ItemInfo /> },
            { path: '*', element: <NotFound /> }
        ]
    },
    {
        path: '/loginpage', element: <AuthLayout />, children: [
            { index: true, element: <LoginPage /> }
        ]
    }

]

export default allRout