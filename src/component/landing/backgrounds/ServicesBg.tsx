import LandingServices1 from '@appImages/landing-services-1.svg';

const ServicesBg = () => {
    return (
        <img
            style={{
                position: 'absolute',
                right: 250,
                top: 100,
                zIndex: -10
            }}
            src={LandingServices1}
            alt="Section background figure"
        />
    );
};

export default ServicesBg;
