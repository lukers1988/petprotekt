import Home from '@appComponents/landing/Home';
import Services from '@appComponents/landing/Services';
import AboutUs from '@appComponents/landing/AboutUs';
import WhyChoose from '@appComponents/landing/WhyChoose';
import Testimonials from '@appComponents/landing/Testimonials';
import Contact from '@appComponents/landing/Contact';
import Header from '@appComponents/landing/Header';
import TopScrollButton from '@appComponents/common/TopScrolButton';

const LandingPageBase = () => {
    return (
        <div
            style={{
                maxWidth: 1440,
                position: 'relative',
                margin: 'auto'
            }}
        >
            <Header />
            <Home />
            <Services />
            <AboutUs />
            <WhyChoose />
            <Testimonials />
            <Contact />
            <TopScrollButton />
        </div>
    );
};

export default LandingPageBase;
