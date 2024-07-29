import customAxios from '@appConfig/customAxios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginSuccess, loginFailure } from '@appStore/UserReducer';
import { useDispatch } from 'react-redux';

const Callback = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const code = params.get('code');

    const fetchUser = () => {
        try {
            customAxios
                .get(`/auth/login/google/callback?code=${code}`)
                .then((response: any): void => {
                    dispatch(loginSuccess({ token: response.data.token }));
                    navigate('/coming-soon');
                });
        } catch (error) {
            dispatch(loginFailure(error));
            console.error('There was an error durign loging', error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return <>Logowanie...</>;
};

export default Callback;
