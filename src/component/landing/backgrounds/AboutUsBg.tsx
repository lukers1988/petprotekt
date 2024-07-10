import LandingAboutUs1 from '@appImages/landing-about-us-1.svg';

const AboutUsBg = () => {
    return (
        <img
            style={{
                position: 'absolute',
                right: 250,
                top: 100,
                zIndex: -10
            }}
            src={LandingAboutUs1}
        />
    );
};

export default AboutUsBg;
