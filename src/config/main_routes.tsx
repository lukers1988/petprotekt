import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "@appComponents/auth/Auth";
import Login from "@appComponents/auth/Login";
import Register from "@appComponents/auth/Register";
import Main from "@appComponents/Main";


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