import LinkItem from '@appComponents/app/SideMenu/LinkItem';
import {
    SideMenuContainer,
    MenuItemContainer
} from '@appComponents/app/SideMenu/styled/SideMenuBaseStyled';
import SideMenuItems from '@appComponents/app/SideMenu/data/SideMenuItems';
import { MenuItemType, MenuItemInterface } from '@appComponents/app/SideMenu/types/SharedTypes';

const SideMenuBase = () => {
    const menuItemsTypeMap: Record<
        MenuItemType,
        React.ComponentType<{ item: MenuItemInterface }>
    > = {
        link: LinkItem,
        // TODO: Add CollapseItem
        collapse: LinkItem
    };

    return (
        <SideMenuContainer>
            {SideMenuItems.map((item) => {
                const MenuItem = menuItemsTypeMap[item.type];

                return (
                    <MenuItemContainer key={item.id}>
                        <MenuItem item={item} />
                    </MenuItemContainer>
                );
            })}
        </SideMenuContainer>
    );
};

export default SideMenuBase;
