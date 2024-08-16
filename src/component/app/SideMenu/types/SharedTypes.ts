import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type MenuItemType = 'link' | 'collapse';

export interface MenuItemInterface {
    id: string;
    icon: IconDefinition;
    label: string;
    type: MenuItemType;
    destination: string;
}
