import dashboardScreenCapture from '@appImages/landing-why-choose.png';
import { useTranslation } from 'react-i18next';
import { ListGroup } from 'react-bootstrap';
import MobileContainerUnder from '@appComponents/styled/MobileContainerUnder';
import ImageHiddenUnder from '@appComponents/styled/ImageHiddenUnder';

const WhyChoose = () => {
    const { t } = useTranslation();

    const reasonsList = [
        t('landingPage:whyCHooseInfo1HTML'),
        t('landingPage:whyCHooseInfo2HTML'),
        t('landingPage:whyCHooseInfo3HTML'),
        t('landingPage:whyCHooseInfo4HTML'),
        t('landingPage:whyCHooseInfo5HTML'),
        t('landingPage:whyCHooseInfo6HTML'),
        t('landingPage:whyCHooseInfo7HTML')
    ];

    return (
        <MobileContainerUnder
            $breakpoint={1375}
            style={{
                marginTop: 100,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    paddingLeft: 20,
                    maxWidth: 500
                }}
            >
                <h3 dangerouslySetInnerHTML={{ __html: t('landingPage:whyCHooseHeaderHTML') }} />
                <ListGroup variant="flush">
                    {reasonsList.map((reason, i) => (
                        <ListGroup.Item key={`${i}-${reason}`}>
                            <p dangerouslySetInnerHTML={{ __html: reason }} />
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <ImageHiddenUnder
                $breakpoint={890}
                src={dashboardScreenCapture}
                style={{ width: 881, height: 664 }}
            ></ImageHiddenUnder>
        </MobileContainerUnder>
    );
};

export default WhyChoose;
