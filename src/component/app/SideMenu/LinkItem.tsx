import {
    StyledLink,
    StyledFontAwesomeIcon
} from '@appComponents/app/SideMenu/styles/LinkItemStyles';
import { MenuItemInterface } from '@appComponents/app/SideMenu/types/SharedTypes';
import { useTranslation } from 'react-i18next';

const LinkItem = ({ item }: { item: MenuItemInterface }) => {
    const { t } = useTranslation();

    const { icon, label, destination, location } = item;

    return (
      <StyledLink to={destination} active={location?.pathname === destination}>
        <StyledFontAwesomeIcon size="2x" icon={icon} />
        <span className="nav-text">{t(`sideMenu:${label}`)}</span>
      </StyledLink>
    );
};

export default LinkItem;
