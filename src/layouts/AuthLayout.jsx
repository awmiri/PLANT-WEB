import { Outlet } from 'react-router';

function AuthLayout() {
    return (
        <div className="">
            <Outlet />
        </div>
    );
}

export default AuthLayout;