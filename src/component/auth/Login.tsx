import { auth } from '@appConfig/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginFailure, loginStart, loginSuccess } from '@appStore/UserReducer';
import { showNotificationWithDuration } from '@appStore/NotificationReducer';
import customAxios from '@appConfig/customAxios';
import TextInput from '@appComponents/inputs/TextInput';
import DogIcon from '@appImages/dog.svg';
import GoogleLoginIcon from '@appImages/google-login.svg';
import FacebookLoginIcon from '@appImages/facebook-login.svg';
import { useTranslation } from 'react-i18next';
import { includes, startsWith, endsWith, values } from 'ramda';
import { Spinner } from 'react-bootstrap';

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
            dispatch(loginFailure(error.message));
            showNotificationWithDuration({
                headerText: t('notifications:signInNotificationHeader'),
                notificationKind: 'danger',
                duration: 3000
            })(dispatch);
        }
    };

    const handleFacebookLogin = async (): Promise<void> => {
        console.info('NYI');
    };

    const handleLogin = async (): Promise<void> => {
        const formComplete = verifyFormCompletion();
        if (!formComplete || user.status === 'loading') return;

        dispatch(loginStart());

        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);

            dispatch(loginSuccess(userCredentials.user));
            navigate('/');
        } catch (error: any) {
            console.log(error.message);
            dispatch(loginFailure(error.message));
            showNotificationWithDuration({
                headerText: t('notifications:signInNotificationHeader'),
                notificationKind: 'danger',
                duration: 3000
            })(dispatch);
        }
    };

    const verifyFormCompletion = () => {
        const errorsAfterVerification = {
            email: email === '' ? t('errors:emailRequired') : verifyEmailCompletion(),
            password: password === '' ? t('errors:passwordRequired') : undefined
        };

        setErrors(errorsAfterVerification);

        return !(values(errorsAfterVerification).filter((value) => value !== undefined).length > 0);
    };

    const verifyEmailCompletion = () => {
        if (email && !includes('@', email)) {
            return t('errors:emailMissing@');
        } else if (startsWith('@', email) || endsWith('@', email)) {
            return t('errors:incompleteEmail');
        } else {
            return undefined;
        }
    };

    return (
        <div className="w-full h-screen">
            tutaj {process.env.VITE_BACKEND_URL}
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
                            alignItems: 'end'
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
                        <h1>PetProtekt</h1>
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
                                email: verifyEmailCompletion()
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
                        <img
                            src={FacebookLoginIcon}
                            className="cursor-pointer"
                            onClick={handleFacebookLogin}
                        />
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
