import { universalGreen } from '@appConst/colors';
import Header from '@appComponents/landing/Header';
import catImage from '@appImages/coming-soon-cat.svg';
import DigitalClockFragment from './DigitalClockFragment';
import { useEffect, useState } from 'react';
import MobileContainerUnder from '@appComponents/styled/MobileContainerUnder';
import SubscribeInput from '@appComponents/common/SubscribeInput';
import ImageHiddenUnder from '@appComponents/styled/ImageHiddenUnder';
import { useTranslation } from 'react-i18next';

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
        <div
            style={{
                width: '100%',
                height: '100vh',
                backgroundImage: `linear-gradient(to bottom, #fff, ${universalGreen})`,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Header />
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
            <h1
                style={{
                    color: '#fff',
                    marginBottom: 30,
                    fontSize: 100,
                    zIndex: 20
                }}
            >
                Launching Soon
            </h1>
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
                <DigitalClockFragment timeFragment={String(timeRemaining.days)} label="DAYS" />
                <DigitalClockFragment timeFragment={String(timeRemaining.hours)} label="HOURS" />
                <DigitalClockFragment
                    timeFragment={String(timeRemaining.minutes)}
                    label="MINUTES"
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
        </div>
    );
};

export default ComingSoon;
