import { auth } from '@appConfig/firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginFailure, loginStart, loginSuccess } from '@appStore/UserReducer';
import { showNotificationWithDuration } from '@appStore/NotificationReducer';
import TextInput from '@appComponents/inputs/TextInput';
import DogIcon from '@appImages/dog.svg';
import GoogleLoginIcon from '@appImages/google-login.svg';
import FacebookLoginIcon from '@appImages/facebook-login.svg';
import { useTranslation } from 'react-i18next';
import { includes, startsWith, endsWith, values } from 'ramda';
import { Spinner } from 'react-bootstrap';
import PasswordQualityIndicator from './PsswordQualityIndicator';

const Register = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');
    const [errors, setErrors] = useState<{
        email: string | undefined;
        password: string | undefined;
        repeatPassword: string | undefined;
    }>({ email: undefined, password: undefined, repeatPassword: undefined });
    const [passwordQuality, setPasswordQuality] = useState<number>();

    const user = useSelector((state: any) => state.user);

    const handleGoogleRegister = async (): Promise<void> => {
        dispatch(loginStart());

        try {
            const provider = new GoogleAuthProvider();

            provider.setCustomParameters({
                prompt: 'select_account'
            });

            const userCredentials = await signInWithPopup(auth, provider);

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

    const handleFacebookRegister = async (): Promise<void> => {
        console.info('NYI');
    };

    const handleRegister = async (): Promise<void> => {
        const formComplete = verifyFormCompletion();
        if (!formComplete || user.status === 'loading') return;

        dispatch(loginStart());

        try {
            await createUserWithEmailAndPassword(auth, user, password);
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
            password: password === '' ? t('errors:passwordRequired') : errors.password,
            repeatPassword:
                repeatPassword === '' ? t('errors:passwordRequired') : errors.repeatPassword
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

    const verifyPasswordQuality = (password: string) => {
        if (password.length < 8) {
            return 0;
        }

        let score = 0;

        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (hasLowerCase) score++;
        if (hasUpperCase) score++;
        if (hasNumbers) score++;
        if (hasSpecialChars) score++;

        if (score <= 1) {
            return 1;
        } else if (score == 2) {
            return 2;
        } else if (score >= 3) {
            return 3;
        }
    };

    useEffect(() => {
        setErrors((currentVal) => ({ ...currentVal, email: verifyEmailCompletion() }));
    }, [email]);

    useEffect(() => {
        const score = verifyPasswordQuality(password);
        setPasswordQuality(score);

        if (score === 0 && password !== '') {
            setErrors((currentVal) => ({
                ...currentVal,
                password: t('errors:shortPassword')
            }));
        } else {
            setErrors((currentVal) => ({
                ...currentVal,
                password: undefined
            }));
        }
    }, [password]);

    useEffect(() => {
        if (password !== repeatPassword && repeatPassword !== '') {
            setErrors((currentVal) => ({
                ...currentVal,
                repeatPassword: t('errors:passwordsMatch')
            }));
        } else {
            setErrors((currentVal) => ({
                ...currentVal,
                repeatPassword: undefined
            }));
        }
    }, [repeatPassword]);

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
                        error={errors.email}
                        onBlur={() => {
                            setErrors((currentValue) => ({
                                ...currentValue,
                                email: verifyEmailCompletion()
                            }));
                        }}
                    />
                    <TextInput
                        label={t('auth:password')}
                        value={password}
                        valueSetter={setPassword}
                        type="password"
                        error={errors.password}
                        InputWidget={
                            passwordQuality !== 0 ? (
                                <PasswordQualityIndicator indicator={passwordQuality} />
                            ) : undefined
                        }
                    />
                    <TextInput
                        label={t('auth:repeatPassword')}
                        value={repeatPassword}
                        valueSetter={setRepeatPassword}
                        type="password"
                        error={errors.repeatPassword}
                    />
                    <div className="d-flex justify-content-center text-center mt-4 pt-1 gap-4">
                        <img
                            src={GoogleLoginIcon}
                            className="cursor-pointer"
                            onClick={handleGoogleRegister}
                        />
                        <img
                            src={FacebookLoginIcon}
                            className="cursor-pointer"
                            onClick={handleFacebookRegister}
                        />
                    </div>
                    <div className="text-center mt-5">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            onClick={() => handleRegister()}
                        >
                            {user.status === 'loading' ? (
                                <Spinner animation="border" size="sm" />
                            ) : (
                                t('auth:signUp')
                            )}
                        </button>
                        <div className="new-account mt-2">
                            <p className="mb-0">
                                {`${t('auth:alreadyHaveAccount')} `}
                                <Link className="text-black" to="/auth/login">
                                    {t('auth:signIn')}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
