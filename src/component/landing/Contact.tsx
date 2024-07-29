import MobileContainerUnder from '@appComponents/styled/MobileContainerUnder';
import CreateContainerOver from '@appComponents/styled/CreateContainerOver';
import GoogleMapReact from 'google-map-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import SubscribeInput from '@appComponents/common/SubscribeInput';

const Contact = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string | undefined>();

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const mobileBreakpoint = 1320;

    useEffect(() => {
        setEmailError(undefined);
    }, [email]);

    return (
        <MobileContainerUnder
            id="contact"
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
                <SubscribeInput
                    email={email}
                    setEmail={setEmail}
                    emailError={emailError}
                    setEmailError={setEmailError}
                    label={t('landingPage:getInTouch')}
                />
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
