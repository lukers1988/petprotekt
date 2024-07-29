import { useEffect, useState } from 'react';

interface DigitalClockFragmentInterface {
    timeFragment: string;
    label: string;
}

const DigitalClockFragment = ({ timeFragment, label }: DigitalClockFragmentInterface) => {
    const [digits, setDigits] = useState(['0', '0']);

    useEffect(() => {
        timeFragment.length !== 1
            ? setDigits(timeFragment.split(''))
            : setDigits(['0', timeFragment]);
    }, [timeFragment]);

    return (
        <div
            style={{
                display: 'inline-block',
                color: '#fff'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    gap: 20
                }}
            >
                {digits.map((digit: string, index) => (
                    <div
                        key={digit + index}
                        style={{
                            fontSize: 150,
                            fontFamily: 'DigitalFont',
                            display: 'inline-block',
                            padding: '0 30px 0 30px',
                            border: '1px solid #fff',
                            borderRadius: 20,
                            minWidth: 133,
                            textAlign: 'center',
                            background: 'linear-gradient(to bottom, #FFFFFF80, #FFFFFF00)'
                        }}
                    >
                        {digit}
                    </div>
                ))}
            </div>
            <h1
                style={{
                    textAlign: 'center',
                    color: 'inherit'
                }}
            >
                {label.toUpperCase()}
            </h1>
        </div>
    );
};

export default DigitalClockFragment;
