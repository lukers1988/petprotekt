import ReactDOM from 'react-dom/client';
import MainRoutes from '@appConfig/main_routes.tsx';
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
import 'primereact/resources/themes/saga-blue/theme.css'; // Import the PrimeReact theme
import 'primereact/resources/primereact.min.css'; // Import PrimeReact CSS
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import store from '@appStore/store.ts';
import './style.css';
import './fonts.css';
import './i18n.js';
import NotificationCenter from '@appComponents/common/NotificationCenter.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PrimeReactProvider>
            <MainRoutes />
            <NotificationCenter />
        </PrimeReactProvider>
    </Provider>
);
