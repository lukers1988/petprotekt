import { Button, Form, InputGroup } from 'react-bootstrap';
import { verifyEmailCompletion } from '@appHelpers/FormVerificationMethods';
import customAxios from '@appConfig/customAxios';
import { showNotificationWithDuration } from '@appStore/NotificationReducer';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Dispatch, SetStateAction } from 'react';

interface SubscribeInputInterface {
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    emailError: string | undefined;
    setEmailError: Dispatch<SetStateAction<string | undefined>>;
    label: string;
}

const SubscribeInput = ({
    email,
    setEmail,
    emailError,
    setEmailError,
    label
}: SubscribeInputInterface) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    return (
        <div>
            <p
                style={{
                    color: '#fff',
                    marginTop: 30,
                    marginBottom: 5
                }}
            >
                <strong>{label}</strong>
            </p>
            <InputGroup
                style={{
                    maxWidth: '500px',
                    marginBottom: 10
                }}
            >
                <Form.Control
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    placeholder={t('landingPage:emailAddress')}
                    type="email"
                />
                <Button
                    onClick={async () => {
                        const newEmailError = verifyEmailCompletion(t, email);

                        if (!newEmailError) {
                            try {
                                await customAxios.post('/subscribe', { email });
                                showNotificationWithDuration({
                                    headerText: t('notifications:mailingListNotificationHeader'),
                                    bodyText: t('notifications:mailingListNotificationInfo'),
                                    notificationKind: 'success',
                                    duration: 3000
                                })(dispatch);
                                setEmail('');
                            } catch (e: any) {
                                showNotificationWithDuration({
                                    headerText: t('notifications:mailingListNotificationHeader'),
                                    notificationKind: 'danger',
                                    duration: 3000
                                })(dispatch);
                            }
                        } else {
                            setEmailError(newEmailError);
                        }
                    }}
                >
                    <strong>{t('landingPage:sendEmail')}</strong>
                </Button>
            </InputGroup>
            <div
                className="text-danger fs-12"
                style={{
                    height: 5,
                    marginBottom: 30
                }}
            >
                <strong>{emailError}</strong>
            </div>
        </div>
    );
};

export default SubscribeInput;
