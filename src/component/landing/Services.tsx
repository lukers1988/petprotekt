import { useRef } from 'react';
import ServicesBg from '@appComponents/landing/backgrounds/ServicesBg';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { universalGreen } from '@appConst/colors';
import { useTranslation } from 'react-i18next';
import CardIcon1 from '@appImages/landing-services-card-1.svg';
import CardIcon2 from '@appImages/landing-services-card-2.svg';
import CardIcon3 from '@appImages/landing-services-card-3.svg';
import CardIcon4 from '@appImages/landing-services-card-4.svg';
import SliderCard from '@appComponents/common/SliderCard';
import MobileContainerUnder from '@appComponents/styled/MobileContainerUnder';

const Services = () => {
    const { t } = useTranslation();
    const sliderRef = useRef<Slider | null>(null);

    const HiddenArrow = () => {
        return <div style={{ display: 'none' }}></div>;
    };

    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <HiddenArrow />,
        prevArrow: <HiddenArrow />,
        responsive: [
            {
                breakpoint: 1310,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const sliderCards = [
        {
            id: 'management',
            headerText: t('landingPage:card1Header'),
            infoText: t('landingPage:card1Info'),
            icon: CardIcon1,
            iconBg: '#FFDED4'
        },
        {
            id: 'schedule',
            headerText: t('landingPage:card2Header'),
            infoText: t('landingPage:card2Info'),
            icon: CardIcon2,
            iconBg: '#FFEED4'
        },
        {
            id: 'feeding',
            headerText: t('landingPage:card3Header'),
            infoText: t('landingPage:card3Info'),
            icon: CardIcon3,
            iconBg: '#D4F0FF'
        },
        {
            id: 'notifications',
            headerText: t('landingPage:card4Header'),
            infoText: t('landingPage:card4Info'),
            icon: CardIcon4,
            iconBg: '#FFD4D4'
        }
    ];

    return (
        <div
            style={{
                position: 'relative',
                minHeight: 504,
                marginTop: 50,
                paddingTop: 70,
                marginBottom: 100,
                backgroundColor: '#A0FE2820'
            }}
        >
            <ServicesBg />
            <div
                style={{
                    textAlign: 'center',
                    position: 'relative',
                    maxWidth: 300,
                    margin: '0px auto 30px auto'
                }}
            >
                <h1>
                    <strong>{t('landingPage:whatWeDo')}</strong>
                    <br />
                    {t('landingPage:forYourPet')}
                </h1>
                <div
                    style={{
                        width: 160,
                        height: 10,
                        backgroundColor: universalGreen,
                        position: 'absolute',
                        bottom: 0,
                        right: -10,
                        zIndex: -1
                    }}
                />
            </div>
            <Slider
                ref={(slider) => {
                    sliderRef.current = slider;
                }}
                {...sliderSettings}
            >
                {sliderCards.map((card) => {
                    const { id, headerText, icon, iconBg, infoText } = card;
                    return (
                        <SliderCard
                            key={id}
                            headerText={headerText}
                            icon={icon}
                            iconBg={iconBg}
                            infoText={infoText}
                            height={230}
                        />
                    );
                })}
            </Slider>
            <MobileContainerUnder $breakpoint={650}>
                <div
                    style={{
                        marginLeft: 30,
                        gap: 20,
                        display: 'flex',
                        zIndex: 10
                    }}
                >
                    <FontAwesomeIcon
                        size="2x"
                        color={universalGreen}
                        icon={faCircleArrowLeft}
                        onClick={() => {
                            sliderRef.current && sliderRef.current.slickPrev();
                        }}
                        style={{
                            cursor: 'pointer'
                        }}
                    />
                    <FontAwesomeIcon
                        size="2x"
                        color={universalGreen}
                        icon={faCircleArrowRight}
                        onClick={() => {
                            sliderRef.current && sliderRef.current.slickNext();
                        }}
                        style={{
                            cursor: 'pointer'
                        }}
                    />
                </div>
            </MobileContainerUnder>
        </div>
    );
};

export default Services;
