import AppBase from '@appComponents/app/AppBase';
import { Outlet } from 'react-router';

const App = () => (
    <AppBase>
        <Outlet />
    </AppBase>
);

export default App;
