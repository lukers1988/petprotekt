import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MenuItemInterface } from '@appComponents/app/SideMenu/types/SharedTypes';

const SideMenuItems: MenuItemInterface[] = [
    {
        id: 'add-pet',
        icon: faPlusCircle,
        label: 'addPet',
        type: 'link',
        destination: '/app/add-pet'
    }
];

export default SideMenuItems;
