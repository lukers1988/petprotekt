import React from 'react'
import ReactDOM from 'react-dom/client'
import MainRoutes from '@appConfig/main_routes.tsx'
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
import 'primereact/resources/themes/saga-blue/theme.css';  // Import the PrimeReact theme
import 'primereact/resources/primereact.min.css';         // Import PrimeReact CSS
import 'primeicons/primeicons.css';     
import 'primeflex/primeflex.css';
import store from '@appStore/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimeReactProvider>
        <MainRoutes />
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>,
)
