import Home from '@appComponents/landing/Home';
import Services from '@appComponents/landing/Services';
import AboutUs from '@appComponents/landing/AboutUs';
import WhyChoose from '@appComponents/landing/WhyChoose';

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
            <WhyChoose />
        </div>
    );
};

export default LandingPageBase;
