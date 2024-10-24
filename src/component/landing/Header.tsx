import SocialLinksContainer from '@appComponents/landing/SocialLinksContainer';
import TopMenu from '@appComponents/landing/TopMenu/Base';
import CreateContainerOver from '@appComponents/styled/CreateContainerOver';

const Header = () => {
    return (
        <div
            style={{
                padding: 25,
                width: '100%'
            }}
        >
            <TopMenu />
            <CreateContainerOver $breakpoint={1000} $display="block">
                <h1
                    style={{
                        display: 'inline',
                        position: 'absolute',
                        top: 10,
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}
                >
                    <strong>Petsmay</strong>
                </h1>
            </CreateContainerOver>
            <SocialLinksContainer />
        </div>
    );
};

export default Header;
