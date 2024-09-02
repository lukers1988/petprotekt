import { scrollToDiv } from '@appHelpers/NavigationHelper';
import LandingtMenuInterface from '@appInterfaces/LandingMenuInterface';
import { useNavigate } from 'react-router';

const DefaultManu = ({ menuItems, selected, selectedSetter }: LandingtMenuInterface) => {
    const navigate = useNavigate();

    return menuItems.map((item) => {
        const { label, target, targetUrl } = item;
        return (
            <div
                key={target}
                onClick={() =>
                    scrollToDiv(
                        target,
                        () => {
                            selectedSetter(target);
                        },
                        targetUrl || '/'
                    )(navigate)
                }
                style={{
                    borderBottom: selected === target ? 'solid 2px #FDC221' : 'none',
                    transition: 'border-bottom 0.3s ease-in-out',
                    cursor: 'pointer'
                }}
            >
                <h4>{label}</h4>
            </div>
        );
    });
};

export default DefaultManu;
