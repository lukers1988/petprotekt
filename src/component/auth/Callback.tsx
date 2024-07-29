import customAxios from '@appConfig/customAxios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginSuccess, loginFailure } from '@appStore/UserReducer';
import { useDispatch } from 'react-redux';
import { showNotificationWithDuration } from '@appStore/NotificationReducer';
import { useTranslation } from 'react-i18next';

const Callback = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const code = params.get('code');

    const fetchUser = async () => {
        try {
            const response = await customAxios.get<{ token: string }>(
                `/auth/login/google/callback?code=${code}`
            );
            dispatch(loginSuccess({ token: response.data.token }));
            navigate('/coming-soon');
        } catch (error) {
            dispatch(loginFailure(error));
            showNotificationWithDuration({
                headerText: t('notifications:signInNotificationHeader'),
                notificationKind: 'danger',
                duration: 3000
            })(dispatch);
            navigate('/');
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return <>Logowanie...</>;
};

export default Callback;
