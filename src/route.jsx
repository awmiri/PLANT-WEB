import LoginPage from "./mainConsept/Login_page/SignupPage"
import HomePage from './mainConsept/Body/TopBody';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

let allRout = [
    {
        path: '/', element: <MainLayout />, children: [
            { index: true, element: <HomePage /> }
        ]
    },
    {
        path: '/loginpage', element: <AuthLayout />, children: [
            { index: true, element: <LoginPage /> }
        ]
    }
]

export default allRout