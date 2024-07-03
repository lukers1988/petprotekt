import customAxios from "@appConfig/customAxios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Callback = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const code = params.get('code');

    useEffect(() => {
        const fetchUser = async() => {
            try {
                await customAxios.get(`/auth/login/google/callback?code=${code}`).then((response: any): void => {

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