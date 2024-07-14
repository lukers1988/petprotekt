import MobileContainerUnder from '@appComponents/styled/MobileContainerUnder';
import CreateContainerOver from '@appComponents/styled/CreateContainerOver';
import GoogleMapReact from 'google-map-react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { verifyEmailCompletion } from '@appHelpers/FormVerificationMethods';
import customAxios from '@appConfig/customAxios';
import { showNotificationWithDuration } from '@appStore/NotificationReducer';
import { useDispatch } from 'react-redux';

const Contact = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string | undefined>();

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const mobileBreakpoint = 1320;

    useEffect(() => {
        setEmailError(undefined);
    }, [email]);

    return (
        <MobileContainerUnder
            $breakpoint={mobileBreakpoint}
            style={{
                marginTop: 50,
                backgroundColor: '#122D08',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: 50
            }}
        >
            <MobileContainerUnder
                $breakpoint={mobileBreakpoint}
                style={{
                    maxWidth: 750
                }}
            >
                <h1
                    style={{
                        color: '#fff'
                    }}
                >
                    <strong>{t('landingPage:joinToday')}</strong>
                </h1>
                <p
                    style={{
                        color: '#fff'
                    }}
                >
                    {t('landingPage:contactInfo1')}
                </p>
                <p
                    style={{
                        color: '#fff',
                        marginTop: 30,
                        marginBottom: 5
                    }}
                >
                    <strong>{t('landingPage:getInTouch')}</strong>
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
                    />
                    <Button
                        onClick={() => {
                            const newEmailError = verifyEmailCompletion(t, email);

                            if (!newEmailError) {
                                try {
                                    customAxios.post('/mailing/add', { email }).then(() => {
                                        showNotificationWithDuration({
                                            headerText: t(
                                                'notifications:mailingListNotificationHeader'
                                            ),
                                            bodyText: t(
                                                'notifications:mailingListNotificationInfo'
                                            ),
                                            notificationKind: 'success',
                                            duration: 3000
                                        })(dispatch);
                                    });
                                } catch (e: any) {
                                    showNotificationWithDuration({
                                        headerText: t(
                                            'notifications:mailingListNotificationHeader'
                                        ),
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
                    {emailError}
                </div>
            </MobileContainerUnder>
            <CreateContainerOver
                $breakpoint={465}
                $display="block"
                style={{
                    width: 460,
                    height: 300
                }}
            >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: apiKey }}
                    defaultCenter={{ lat: 52.23, lng: 21.01 }}
                    defaultZoom={6}
                ></GoogleMapReact>
            </CreateContainerOver>
        </MobileContainerUnder>
    );
};

export default Contact;
