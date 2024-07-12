import LandingAboutUs1 from '@appImages/landing-about-us-1.svg';
import LandingAboutUs2 from '@appImages/landing-about-us-2.svg';
import LandingAboutUs3 from '@appImages/landing-about-us-3.png';
import ImageHiddenUnder from '@appComponents/styled/ImageHiddenUnder';

const AboutUsBg = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -10
            }}
        >
            <ImageHiddenUnder
                $breakpoint={1435}
                src={LandingAboutUs1}
                alt="Section background figure 1"
                style={{ position: 'absolute', top: 100, left: 150 }}
            />
            <ImageHiddenUnder
                $breakpoint={1435}
                src={LandingAboutUs2}
                alt="Section background figure 2"
                style={{ position: 'absolute', top: 150, left: 50 }}
            />
            <ImageHiddenUnder
                $breakpoint={1435}
                src={LandingAboutUs3}
                alt="Section background figure 3"
                style={{ position: 'absolute', top: 150, left: 100 }}
            />
        </div>
    );
};

export default AboutUsBg;
