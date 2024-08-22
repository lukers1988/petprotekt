import { Outlet, Navigate } from 'react-router';
import { isNil } from 'ramda';
import getToken from '@appHooks/getToken';

const Auth = () => {
    const token = getToken();
    
    return (
      <>
        {!isNil(token) ? (
          <Navigate to={import.meta.env.DEV ? 'app/dashboard' : '/coming-soon'} />
        ) : (
          <Outlet />
        )}
      </>
    );
};

export default Auth;
