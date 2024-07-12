import AboutUsBg from '@appComponents/landing/backgrounds/AboutUsBg';
import { universalGreen } from '@appConst/colors';
import { useTranslation } from 'react-i18next';
import MobileContainerUnder from '@appComponents/styled/MobileContainerUnder';
import { useNavigate } from 'react-router';

const AboutUs = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <MobileContainerUnder
            $breakpoint={1435}
            style={{
                position: 'relative',
                padding: 50,
                display: 'flex',
                alignItems: 'flex-end',
                flexDirection: 'column'
            }}
        >
            <AboutUsBg />
            <div
                style={{
                    marginTop: 100,
                    maxWidth: 620,
                    color: '#331B3B'
                }}
            >
                <div
                    style={{
                        position: 'relative'
                    }}
                >
                    <h1>
                        <strong>{t('landingPage:aboutUs')}</strong>
                    </h1>
                    <h2>{t('landingPage:askQuestions')}</h2>
                    <br />
                    <div
                        style={{
                            maxWidth: 300,
                            height: 5,
                            backgroundColor: universalGreen,
                            position: 'absolute',
                            bottom: 20,
                            right: -10,
                            zIndex: -1
                        }}
                    />
                </div>
                <p dangerouslySetInnerHTML={{ __html: t('landingPage:aboutUsInfo1HTML') }} />
                <br />
                <p dangerouslySetInnerHTML={{ __html: t('landingPage:aboutUsInfo2HTML') }} />
            </div>
            <button
                className="btn btn-primary btn-block"
                style={{
                    maxWidth: 300
                }}
                onClick={() => {
                    navigate('/auth/register');
                }}
            >
                <strong>{t('landingPage:exploreMore')}</strong>
            </button>
        </MobileContainerUnder>
    );
};

export default AboutUs;
