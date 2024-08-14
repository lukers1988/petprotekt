import Header from '@appComponents/landing/Header';
import catImage from '@appImages/coming-soon-cat.svg';
import DigitalClockFragment from './DigitalClockFragment';
import { useEffect, useState } from 'react';
import MobileContainerUnder from '@appComponents/styled/MobileContainerUnder';
import SubscribeInput from '@appComponents/common/SubscribeInput';
import ImageHiddenUnder from '@appComponents/styled/ImageHiddenUnder';
import { useTranslation } from 'react-i18next';
import ComingSoonContainer from '@appComponents/styled/ComingSoonContainer';
import CreateContainerOver from '@appComponents/styled/CreateContainerOver';

const ComingSoon = () => {
    const { t } = useTranslation();
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0 });
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string | undefined>();

    const calculateTimeRemaining = () => {
        const now = new Date();
        const targetDate = new Date(now.getFullYear(), 8, 1, 0, 0, 0, 0);
        const timeDiff = targetDate.getTime() - now.getTime();

        if (timeDiff <= 0) {
            setTimeRemaining({ days: 0, hours: 0, minutes: 0 });
            return;
        }

        const minutes = Math.floor(timeDiff / 1000 / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        setTimeRemaining({
            days: days,
            hours: hours % 24,
            minutes: minutes % 60
        });
    };

    useEffect(() => {
        calculateTimeRemaining();
        const interval = setInterval(calculateTimeRemaining, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ComingSoonContainer>
            <div
                style={{
                    marginBottom: 200
                }}
            >
                <Header />
            </div>
            <ImageHiddenUnder
                $breakpoint={1000}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    zIndex: 1,
                    height: '90%'
                }}
                src={catImage}
            />
            <CreateContainerOver
                $breakpoint={500}
                $display="block"
                style={{
                    zIndex: 20
                }}
            >
                <h1
                    style={{
                        color: '#fff',
                        marginBottom: 30,
                        fontSize: 100,
                        textAlign: 'center'
                    }}
                >
                    {t('common:launchingSoon')}
                </h1>
            </CreateContainerOver>
            <MobileContainerUnder
                $breakpoint={1000}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    zIndex: 20,
                    position: 'relative',
                    width: '100%'
                }}
            >
                <DigitalClockFragment
                    timeFragment={String(timeRemaining.days)}
                    label={t('common:days')}
                />
                <DigitalClockFragment
                    timeFragment={String(timeRemaining.hours)}
                    label={t('common:hours')}
                />
                <DigitalClockFragment
                    timeFragment={String(timeRemaining.minutes)}
                    label={t('common:minutes')}
                />
            </MobileContainerUnder>
            <div
                style={{
                    position: 'relative',
                    zIndex: 30
                }}
            >
                <SubscribeInput
                    email={email}
                    setEmail={setEmail}
                    emailError={emailError}
                    setEmailError={setEmailError}
                    label={t('landingPage:launchInfo')}
                />
            </div>
        </ComingSoonContainer>
    );
};

export default ComingSoon;
