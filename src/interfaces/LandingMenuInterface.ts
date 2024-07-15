import { SetStateAction, Dispatch } from 'react';

interface LandingtMenuInterface {
    menuItems: { label: string; target: string }[];
    selected: string;
    selectedSetter: Dispatch<SetStateAction<string>>;
}

export default LandingtMenuInterface;
