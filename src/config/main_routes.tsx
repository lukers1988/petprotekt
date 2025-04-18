import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from '@appRoutes/Auth';
import Login from '@appComponents/auth/Login';
import Register from '@appComponents/auth/Register';
import Callback from '@appComponents/auth/Callback';
import LandingPage from '@appRoutes/LandingPage';
import ComingSoon from '@appRoutes/ComingSoon';
import App from '@appRoutes/App';
import DashboardBase from '@appComponents/app/Dashboard/DashboardBase';
import FallBackRoute from '@appRoutes/FallbackRoute';
import AddPetForm from '@appComponents/app/AddPetForm';
import MainPage from '@appComponents/app/MainPage'

const MainRoutes = () => (
  <Router>
    <Routes>
      <Route path="*" element={<FallBackRoute />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="coming-soon" element={<ComingSoon />} />
      <Route path="auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="callback" element={<Callback />} />
      </Route>
      <Route path="app" element={<App />}>
        <Route path="dashboard" element={<MainPage />} />
        <Route path="add-pet" element={<AddPetForm />} />
      </Route>
    </Routes>
  </Router>
);

export default MainRoutes;
