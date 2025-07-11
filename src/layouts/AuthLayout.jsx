import { Outlet } from 'react-router';

function AuthLayout() {
    return (
        <div className='w-full h-dvh overflow-hidden flex items-center justify-between relative'>
            <Outlet />
        </div>
    );
}

export default AuthLayout;