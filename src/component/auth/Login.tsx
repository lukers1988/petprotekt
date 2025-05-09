import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginFailure, loginStart, loginSuccess } from '@appStore/UserReducer';
import { showNotificationWithDuration } from '@appStore/NotificationReducer';
import customAxios from '@appConfig/customAxios';
import TextInput from '@appComponents/inputs/TextInput';
import DogIcon from '@appImages/dog.svg';
import GoogleLoginIcon from '@appImages/google-login.svg';
// import FacebookLoginIcon from '@appImages/facebook-login.svg';
import { useTranslation } from 'react-i18next';
import { values } from 'ramda';
import { Spinner } from 'react-bootstrap';
import { verifyEmailCompletion } from '@appHelpers/FormVerificationMethods';

const Login = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<{
        email: string | undefined;
        password: string | undefined;
    }>({ email: undefined, password: undefined });

    const user = useSelector((state: any) => state.user);

    const handleGoogleLogin = async (): Promise<void> => {
        dispatch(loginStart());

        try {
            customAxios.get('/auth/login/google').then((response: any) => {
                window.location.href = response.data.google_url;
            });
        } catch (error: any) {
            console.error(error.message);
            showNotificationWithDuration({
                headerText: t('notifications:signInNotificationHeader'),
                notificationKind: 'danger',
                duration: 3000
            })(dispatch);
        }
    };

    // const handleFacebookLogin = async (): Promise<void> => {
    //     console.info('NYI');
    // };

    const handleLogin = async (): Promise<void> => {
        const formComplete = verifyFormCompletion();
        if (!formComplete || user.status === 'loading') return;

        dispatch(loginStart());

        try {
            const response = await customAxios.post<{ token: string }>('/auth_check', {
                username: email,
                password: password
            });
            dispatch(loginSuccess({ token: response.data.token }));
        } catch (error: any) {
            dispatch(loginFailure(error.message));
            showNotificationWithDuration({
                headerText: t('notifications:signInNotificationHeader'),
                bodyText: error.response.status === 401 ? t('errors:incorrectCredentials') : undefined,
                notificationKind: 'danger',
                duration: 3000
            })(dispatch);
        }
    };

    const verifyFormCompletion = () => {
        const errorsAfterVerification = {
            email: email === '' ? t('errors:emailRequired') : verifyEmailCompletion(t, email),
            password: password === '' ? t('errors:passwordRequired') : undefined
        };

        setErrors(errorsAfterVerification);

        return !(values(errorsAfterVerification).filter((value) => value !== undefined).length > 0);
    };

    return (
        <div className="w-full h-screen">
            <div
                className="authincation-content p-5 col-lg-5 col-md-6 flex flex-column"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    minWidth: 300
                }}
            >
                <div className="w-full">
                    <div
                        className="flex mb-5"
                        style={{
                            justifyContent: 'center',
                            alignItems: 'end',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        <img
                            src={DogIcon}
                            alt=""
                            style={{
                                width: 60,
                                height: 60
                            }}
                        />
                        <h1>Petsmay</h1>
                    </div>
                    <TextInput
                        label={t('auth:email')}
                        value={email}
                        valueSetter={setEmail}
                        type="email"
                        error={errors.email}
                        onBlur={() => {
                            setErrors((currentValue) => ({
                                ...currentValue,
                                email: verifyEmailCompletion(t, email)
                            }));
                        }}
                        onChangeEffect={() => {
                            setErrors((currentVal) => ({
                                ...currentVal,
                                email: undefined
                            }));
                        }}
                    />
                    <TextInput
                        label={t('auth:password')}
                        value={password}
                        valueSetter={setPassword}
                        type="password"
                        error={errors.password}
                        onChangeEffect={() => {
                            setErrors((currentVal) => ({
                                ...currentVal,
                                password: undefined
                            }));
                        }}
                    />
                    <div className="d-flex justify-content-center text-center mt-4 pt-1 gap-4">
                        <img
                            src={GoogleLoginIcon}
                            className="cursor-pointer"
                            onClick={handleGoogleLogin}
                        />
                        {/* <img
                            src={FacebookLoginIcon}
                            className="cursor-pointer"
                            onClick={handleFacebookLogin}
                        /> */}
                    </div>
                    <div className="text-center mt-5">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            onClick={() => handleLogin()}
                        >
                            {user.status === 'loading' ? (
                                <Spinner animation="border" size="sm" />
                            ) : (
                                t('auth:signIn')
                            )}
                        </button>
                        <div className="new-account mt-2">
                            <p className="mb-0">
                                {`${t('auth:noAccount')} `}
                                <Link className="text-black" to="/auth/register">
                                    {t('auth:signUp')}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
