import LoginPage from "./mainConsept/Login_page/SignupPage"
import HomePage from './mainConsept/Body/TopBody';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import NotFound from './mainConsept/404err/NotFound'

let allRout = [
    {
        path: '/', element: <MainLayout />, children: [
            { index: true, element: <HomePage /> },
            { path: '/*', element: <NotFound /> }
        ]
    },
    {
        path: '/loginpage', element: <AuthLayout />, children: [
            { index: true, element: <LoginPage /> }
        ]
    }

]

export default allRout