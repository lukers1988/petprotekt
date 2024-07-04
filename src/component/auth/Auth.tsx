import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router';

const Auth = () => {
    const user = useSelector((state: any) => state.user);

    return <>{user.user !== null ? <Navigate to={'/'} /> : <Outlet />}</>;
};

export default Auth;
