import { universalGreen } from '@appConst/colors';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import HiddenDummy from '@appComponents/common/HiddenDummy';
import QuoteIcon from '@appImages/quote-mark.svg';
import SliderCard from '@appComponents/common/SliderCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import ShowContainerOver from '@appComponents/styled/ShowContainerOver';

const Testimonials = () => {
    const { t } = useTranslation();
    const sliderRef = useRef<Slider | null>(null);

    const QuoteCardFooter = ({ name }: { name: string }) => (
        <div
            style={{
                height: '100%',
                display: 'flex',
                alignItems: 'flex-end'
            }}
        >
            <div
                style={{
                    margin: '10px 0 10px 0',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5
                }}
            >
                <div
                    style={{
                        backgroundColor: '#FDC221',
                        width: 10,
                        height: 3
                    }}
                />
                <strong>{name}</strong>
            </div>
        </div>
    );

    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <HiddenDummy />,
        prevArrow: <HiddenDummy />,
        responsive: [
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const quoteCards = [
        {
            id: 'ewaP',
            infoText: t('landingPage:testimonial1'),
            icon: QuoteIcon,
            iconBg: '#FFF',
            footer: <QuoteCardFooter name={'Ewa P.'} />
        },
        {
            id: 'karolM',
            infoText: t('landingPage:testimonial2'),
            icon: QuoteIcon,
            iconBg: '#FFF',
            footer: <QuoteCardFooter name={'Karol M.'} />
        }
    ];

    return (
        <div
            style={{
                marginTop: 50
            }}
        >
            <div
                style={{
                    position: 'relative',
                    textAlign: 'center',
                    maxWidth: 400,
                    margin: 'auto',
                    marginBottom: 30
                }}
            >
                <h1>
                    <strong>{t('landingPage:ourTestimonials')}</strong>
                </h1>
                <h2>{t('landingPage:clientsSaying')}</h2>
                <br />
                <div
                    style={{
                        width: 120,
                        height: 10,
                        backgroundColor: universalGreen,
                        position: 'absolute',
                        bottom: 20,
                        right: -10,
                        zIndex: -1
                    }}
                />
            </div>
            <div>
                <Slider
                    ref={(slider) => {
                        sliderRef.current = slider;
                    }}
                    {...sliderSettings}
                >
                    {quoteCards.map((card) => {
                        const { id, icon, iconBg, infoText, footer } = card;

                        return (
                            <SliderCard
                                key={id}
                                icon={icon}
                                iconBg={iconBg}
                                infoText={infoText}
                                footer={footer}
                                height={320}
                            />
                        );
                    })}
                </Slider>
            </div>
            <ShowContainerOver
                $breakpoint={660}
                style={{
                    gap: 20,
                    display: 'flex',
                    zIndex: 10,
                    justifyContent: 'center'
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
            </ShowContainerOver>
        </div>
    );
};

export default Testimonials;
