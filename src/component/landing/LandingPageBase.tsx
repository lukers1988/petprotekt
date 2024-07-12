import Home from '@appComponents/landing/Home';
import Services from '@appComponents/landing/Services';
import AboutUs from '@appComponents/landing/AboutUs';

const LandingPageBase = () => {
    return (
        <div
            style={{
                // TODO - decide if we want to go any wider than that
                // maxWidth: 1440,
                position: 'relative',
                margin: 'auto'
            }}
        >
            <Home />
            <Services />
            <AboutUs />
        </div>
    );
};

export default LandingPageBase;
