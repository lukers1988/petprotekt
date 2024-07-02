import customAxios from "@appConfig/customAxios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Callback = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async() => {
            try {
                await customAxios.get('/auth/login/google/callback').then((response: any): void => {
                    console.log('User data: ', response.data);

                    localStorage.setItem('token', response.data.token);

                    navigate('/');
                });
            } catch (error) {
                console.error('There was an error durign loging', error);
            }
        };

        fetchUser();
    }, [location, navigate]);

    return <>Logowanie...</>
}

export default Callback;