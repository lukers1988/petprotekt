import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MobileMenu from '@appComponents/landing/TopMenu/MobileMenu';
import DefaultMenu from '@appComponents/landing/TopMenu/DefaultMenu';
import useScreenWidth from '@appHooks/useScreenWidth';

const TopMenu = () => {
    const { t } = useTranslation();
    const [selected, setSelected] = useState('home');
    const [scrollPosition, setScrollPosition] = useState(0);
    const screenWidth = useScreenWidth();

    const menuItems = [
        {
            label: t('landingPage:homeMenuLabel'),
            target: 'home'
        },
        {
            label: t('landingPage:aboutUsMenuLabel'),
            target: 'about-us'
        },
        {
            label: t('landingPage:servicesMenuLabel'),
            target: 'services'
        },
        {
            label: t('landingPage:contactMenuLabel'),
            target: 'contact'
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition < 100) {
            setSelected('home');
        }
    }, [scrollPosition]);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 30,
                position: 'absolute',
                left: 30,
                top: 10,
                cursor: 'pointer',
                 width: '90%'
            }}
        >
            {screenWidth > 580 ? (
                <DefaultMenu
                    menuItems={menuItems}
                    selected={selected}
                    selectedSetter={setSelected}
                />
            ) : (
                <MobileMenu
                    menuItems={menuItems}
                    selected={selected}
                    selectedSetter={setSelected}
                />
            )}
        </div>
    );
};

export default TopMenu;
