import Home from '@appComponents/landing/Home';
import Services from '@appComponents/landing/Services';
import AboutUs from '@appComponents/landing/AboutUs';
import WhyChoose from '@appComponents/landing/WhyChoose';
// import Testimonials from '@appComponents/landing/Testimonials';
import Contact from '@appComponents/landing/Contact';
import Header from '@appComponents/landing/Header';
import TopScrollButton from '@appComponents/common/TopScrollButton';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const LandingPageBase = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'instant' });
            }
            window.history.replaceState(null, '', ' ');
        }
    }, [location]);

    return (
        <div
            style={{
                maxWidth: 1440,
                margin: 'auto',
                position: 'relative'
            }}
        >
            <Header />
            <Home />
            <Services />
            <AboutUs />
            <WhyChoose />
            {/* TODO - uncomment once the app is fully functional */}
            {/* <Testimonials /> */}
            <Contact />
            <TopScrollButton />
        </div>
    );
};

export default LandingPageBase;
