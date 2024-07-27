import { universalGreen } from '@appConst/colors';
import Header from '@appComponents/landing/Header';

const ComingSoon = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                backgroundImage: `linear-gradient(to bottom, #fff, ${universalGreen})`,
                position: 'relative'
            }}
        >
            <Header />
        </div>
    );
};

export default ComingSoon;
