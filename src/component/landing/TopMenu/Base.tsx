import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MobileMenu from '@appComponents/landing/TopMenu/MobileMenu';
import DefaultMenu from '@appComponents/landing/TopMenu/DefaultMenu';
import useScreenWidth from '@appHooks/useScreenWidth';
import { endsWith } from 'ramda';

const TopMenu = () => {
    const { t } = useTranslation();
    const [selected, setSelected] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);
    const isMobile = useScreenWidth(735);

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
      },
      {
        label: t('landingPage:blogMenuLabel'),
        target: 'blog',
        targetUrl: '/blog'
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
      if (scrollPosition < 100 && endsWith('/', window.location.href)) {
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
          width: '90%'
        }}
      >
        {!isMobile ? (
          <DefaultMenu menuItems={menuItems} selected={selected} selectedSetter={setSelected} />
        ) : (
          <MobileMenu menuItems={menuItems} selected={selected} selectedSetter={setSelected} />
        )}
      </div>
    );
};

export default TopMenu;
