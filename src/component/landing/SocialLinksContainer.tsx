import frame from '@appImages/social-frame.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import LanguagePicker from '@appComponents/common/LanguagePicker';

const SocialLinksContainer = () => {
    const socialsList = [
        {
            icon: faFacebookF,
            link: 'https://www.facebook.com/groups/2792815504223806'
        },
        {
            icon: faLinkedinIn,
            link: 'https://www.linkedin.com/company/petprotekt/'
        },
        {
            icon: faInstagram,
            link: 'https://www.instagram.com/pet.protekt/'
        }
    ];

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                position: 'absolute',
                right: 20,
                top: 10
            }}
        >
            {socialsList.map((social) => {
                const { icon, link } = social;

                return (
                    <div
                        key={link}
                        style={{
                            position: 'relative',
                            width: 46,
                            height: 49,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            color: '#000000'
                        }}
                        onClick={() => {
                            window.open(link, '_blank');
                        }}
                    >
                        <img
                            src={frame}
                            style={{
                                position: 'absolute'
                            }}
                        />
                        <FontAwesomeIcon icon={icon} />
                    </div>
                );
            })}
            <LanguagePicker />
        </div>
    );
};

export default SocialLinksContainer;
