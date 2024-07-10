import LandingHome1 from '@appImages/landing-home-1.svg';
import LandingHome2 from '@appImages/landing-home-2.svg';
import LandingHome3 from '@appImages/landing-home-3.svg';
import LandingHome4 from '@appImages/landing-home-4.svg';
import ImageHiddenUnder from '@appComponents/styled/ImageHiddenUnder';

interface MobileBgInterface {
    breakpoint: number;
}

const HomeBg = ({ breakpoint }: MobileBgInterface) => {
    return (
        <div
            style={{
                position: 'absolute',
                right: 0,
                top: 0,
                zIndex: -1
            }}
        >
            <img
                style={{
                    width: 490,
                    position: 'absolute',
                    right: 0,
                    top: 0
                }}
                src={LandingHome1}
            />
            <ImageHiddenUnder
                breakpoint={breakpoint}
                style={{
                    width: 460,
                    position: 'absolute',
                    right: 240,
                    top: 190
                }}
                src={LandingHome3}
            />
            <ImageHiddenUnder
                breakpoint={breakpoint}
                style={{
                    width: 393,
                    position: 'absolute',
                    right: 188,
                    top: 120
                }}
                src={LandingHome2}
            />
            <ImageHiddenUnder
                breakpoint={breakpoint}
                style={{
                    width: 595,
                    position: 'absolute',
                    right: 76,
                    top: 150
                }}
                src={LandingHome4}
            />
        </div>
    );
};

export default HomeBg;
