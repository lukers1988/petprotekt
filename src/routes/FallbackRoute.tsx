import getToken from '@appHooks/getToken';
import { Navigate } from 'react-router';

const FallBackRoute = () => {
    const token = getToken();

    return <Navigate to={token ? '/app/dashboard' : '/'} />;
};

export default FallBackRoute;
