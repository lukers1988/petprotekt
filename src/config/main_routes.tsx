import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../component/auth/Auth";
import Login from "../component/auth/Login";
import Register from "../component/auth/Register";
import Main from "../component/Main";


const MainRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="auth" element={<Auth />}>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    </Router>
)

export default MainRoutes;