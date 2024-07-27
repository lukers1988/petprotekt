import { scrollToDiv } from '@appHelpers/NavigationHelper';
import LandingtMenuInterface from '@appInterfaces/LandingMenuInterface';

const DefaultManu = ({ menuItems, selected, selectedSetter }: LandingtMenuInterface) => {
    return menuItems.map((item) => {
        const { label, target } = item;
        return (
            <div
                key={target}
                onClick={() =>
                    scrollToDiv(
                        target,
                        () => {
                            selectedSetter(target);
                        },
                        '/'
                    )
                }
                style={{
                    borderBottom: selected === target ? 'solid 2px #FDC221' : 'none',
                    transition: 'border-bottom 0.3s ease-in-out'
                }}
            >
                <h4>{label}</h4>
            </div>
        );
    });
};

export default DefaultManu;
