import LinkItem from '@appComponents/app/SideMenu/LinkItem';
import {
    SideMenuContainer,
    MenuItemContainer
} from '@appComponents/app/SideMenu/styles/SideMenuBaseStyled';
import SideMenuItems from '@appComponents/app/SideMenu/data/SideMenuItems';
import { MenuItemType, MenuItemInterface } from '@appComponents/app/SideMenu/types/SharedTypes';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '@appStore/store';
import { path } from 'ramda';
import { toggleSideMenu } from '@appStore/AppSettingsReducer';

const SideMenuBase = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const menuOpened = useSelector((state: RootStateType) =>
    path(['appSettings', 'sideMenuOpen'], state)
  );

  const menuItemsTypeMap: Record<MenuItemType, React.ComponentType<{ item: MenuItemInterface }>> = {
    link: LinkItem,
    // TODO: Add CollapseItem
    collapse: LinkItem
  };

  return (
    <SideMenuContainer show={menuOpened}>
      {SideMenuItems.map((item) => {
        const MenuItem = menuItemsTypeMap[item.type];

        return (
          <MenuItemContainer key={item.id} onClick={() => dispatch(toggleSideMenu())}>
            <MenuItem item={{ ...item, location }} />
          </MenuItemContainer>
        );
      })}
    </SideMenuContainer>
  );
};

export default SideMenuBase;
