import { auth } from '@appConfig/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginFailure, loginStart, loginSuccess } from '@appStore/UserReducer';
import customAxios from '@appConfig/customAxios';
import TextInput from '@appComponents/inputs/TextInput';
import DogIcon from './../../images/dog.svg';
import GoogleLoginIcon from './../../images/google-login.svg';
import FacebookLoginIcon from './../../images/facebook-login.svg';
import i18next from 'i18next';

const Login = () => {
    const t = i18next.t;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleGoogleLogin = async (): Promise<void> => {
        dispatch(loginStart());

        try {
            customAxios.get('/auth/login/google').then((response: any) => {
                window.location.href = response.data.google_url;
            });
        } catch (error: any) {
            console.error(error.message);
            dispatch(loginFailure(error.message));
        }
    };

    const handleFacebookLogin = async (): Promise<void> => {
        console.info('NYI');
        // dispatch(loginStart());

        // try {
        //     customAxios.get('/auth/login/google').then((response: any) => {
        //         window.location.href = response.data.google_url;
        //     });
        // } catch (error: any) {
        //     console.log(error.message);
        //     dispatch(loginFailure(error.message));
        // }
    };

    const handleLogin = async (): Promise<void> => {
        dispatch(loginStart());

        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);

            dispatch(loginSuccess(userCredentials.user));
            navigate('/');
        } catch (error: any) {
            console.log(error.message);
            dispatch(loginFailure(error.message));
        }
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
                    />
                    <TextInput
                        label={t('auth:password')}
                        value={password}
                        valueSetter={setPassword}
                        type="password"
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
                            {t('auth:signIn')}
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
