import AppBase from '@appComponents/app/AppBase';
import getToken from '@appHooks/getToken';
import { Navigate, Outlet } from 'react-router';

const App = () => {
  const token = getToken();

  return <AppBase>{token ? <Outlet /> : <Navigate to={'/'} />}</AppBase>;
};

export default App;
