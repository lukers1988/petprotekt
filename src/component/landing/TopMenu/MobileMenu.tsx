import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LandingtMenuInterface from '@appInterfaces/LandingMenuInterface';
import { ListGroup } from 'react-bootstrap';
import { scrollToDiv } from '@appHelpers/NavigationHelper';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const MobileManu = ({ menuItems, selected, selectedSetter }: LandingtMenuInterface) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            style={{
                width: '100%'
            }}
        >
            <FontAwesomeIcon
                icon={faBars}
                style={{
                    width: 46,
                    height: 49
                }}
                onClick={() => setMenuOpen((currentValue) => !currentValue)}
            />
            <div
                style={{
                    zIndex: 200,
                    position: 'relative'
                }}
            >
                {menuOpen && (
                    <ListGroup>
                        {menuItems.map((item) => {
                            const { label, target, targetUrl } = item;
                            return (
                                <ListGroup.Item
                                    key={label}
                                    style={{
                                        backgroundColor: '#fff',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 100,
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div
                                        key={target}
                                        onClick={() => {
                                            scrollToDiv(
                                                target,
                                                () => {
                                                    selectedSetter(target);
                                                },
                                                targetUrl || '/'
                                            )(navigate);
                                            setMenuOpen(false);
                                        }}
                                        style={{
                                            display: 'inline-block',
                                            borderBottom:
                                                selected === target ? 'solid 2px #FDC221' : 'none',
                                            transition: 'border-bottom 0.3s ease-in-out',
                                            height: 30
                                        }}
                                    >
                                        <h4>{label}</h4>
                                    </div>
                                </ListGroup.Item>
                            );
                        })}
                    </ListGroup>
                )}
            </div>
        </div>
    );
};

export default MobileManu;
