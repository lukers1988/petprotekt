import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router';
import { isNil } from 'ramda';

const Auth = () => {
    const token = useSelector((state: any) => state?.user?.user?.token);
    return <>{!isNil(token) ? <Navigate to={'/coming-soon'} /> : <Outlet />}</>;
};

export default Auth;
