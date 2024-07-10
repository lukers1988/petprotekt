import { useTranslation } from 'react-i18next';
import HomeBg from './backgrounds/HomeBg';
import MobileContainerUnder from '@appComponents/styled/MobileContainerUnder';
import { useNavigate } from 'react-router-dom';
import { universalGreen } from '@appConst/colors';

const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const mobileBreakpointWidth = 1024;

    return (
        <MobileContainerUnder
            breakpoint={mobileBreakpointWidth}
            style={{
                padding: 50
            }}
        >
            <HomeBg breakpoint={mobileBreakpointWidth} />
            <div
                style={{
                    maxWidth: 400,
                    marginTop: 90,
                    marginBottom: 50
                }}
            >
                <h1>
                    <strong>{t('landingPage:joinCommunity')}</strong>
                    {` ${t('landingPage:and')} `}
                    <strong>{t('landingPage:ensureBenefits')}</strong>
                </h1>
            </div>
            <div
                style={{
                    height: 20,
                    width: 300,
                    backgroundColor: universalGreen
                }}
            ></div>
            <div
                style={{
                    maxWidth: 600,
                    color: '#331B3B'
                }}
            >
                <p>{t('landingPage:subBenefits')}</p>
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
                <strong>{t('landingPage:join')}</strong>
            </button>
        </MobileContainerUnder>
    );
};

export default Home;
