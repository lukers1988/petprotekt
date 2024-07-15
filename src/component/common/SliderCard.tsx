import { ReactNode } from 'react';

interface SlicerCardInterface {
    headerText?: string;
    infoText: string;
    icon: string;
    iconBg: string;
    height?: number;
    width?: number;
    footer?: ReactNode;
}

const SliderCard = ({
    headerText,
    infoText,
    icon,
    iconBg,
    height,
    width,
    footer
}: SlicerCardInterface) => {
    return (
        <div>
            <div
                style={{
                    height: height || 190,
                    maxWidth: width || 310,
                    backgroundColor: 'white',
                    display: 'flex',
                    margin: '20px auto 20px auto',
                    borderRadius: '10px',
                    boxShadow: `0 0 5px 5px #00000010`,
                    padding: 10,
                    flexDirection: 'column'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 20,
                        minHeight: 66
                    }}
                >
                    <div
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: iconBg,
                            borderRadius: 10,
                            display: 'flex',
                            alignContent: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <img
                            src={icon}
                            style={{
                                width: 30
                            }}
                        ></img>
                    </div>
                    <h5
                        style={{
                            maxWidth: 200
                        }}
                    >
                        <strong>{headerText}</strong>
                    </h5>
                </div>
                <p
                    style={{
                        marginBottom: 0
                    }}
                >
                    {infoText}
                </p>
                {footer && footer}
            </div>
        </div>
    );
};

export default SliderCard;
