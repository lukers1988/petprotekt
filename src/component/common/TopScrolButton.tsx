import { universalGreen } from '@appConst/colors';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const TopScrollButton = () => {
    const [topScrollVisible, setTopScrollVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setTopScrollVisible(false);
        } else {
            setTopScrollVisible(true);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        topScrollVisible && (
            <div
                style={{
                    width: 70,
                    height: 70,
                    backgroundColor: universalGreen,
                    position: 'fixed',
                    bottom: 20,
                    right: 20,
                    cursor: 'pointer',
                    opacity: '50%',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 10
                }}
                onClick={scrollToTop}
            >
                <FontAwesomeIcon size="3x" icon={faChevronUp} />
            </div>
        )
    );
};

export default TopScrollButton;
