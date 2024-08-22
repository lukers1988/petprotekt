import {
  HeaderContainer,
  LogoContainer,
  SettingsContainer
} from '@appComponents/app/AppHeader/styles/AppHeaderBaseStyles';
import DogIcon from '@appImages/dog.svg';
import { useNavigate } from 'react-router';
import UserMenu from '@appComponents/app/AppHeader/UserMenu';
import LanguagePicker from '@appComponents/common/LanguagePicker';
import useScreenWidth from '@appHooks/useScreenWidth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { toggleSideMenu } from '@appStore/AppSettingsReducer';
import { useDispatch } from 'react-redux';

const AppHeaderBase = () => {
  const navigate = useNavigate();
  const isMobile = useScreenWidth(768);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => navigate('/app/dashboard')}>
        <img
          src={DogIcon}
          alt=""
          style={{
            width: 50,
            height: 50
          }}
          onClick={() => {
            navigate('/app/dashboard');
          }}
        />
        {!isMobile ? (
          <h2>PetProtekt</h2>
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            style={{
              width: 30,
              height: 30
            }}
            onClick={() => dispatch(toggleSideMenu())}
          />
        )}
      </LogoContainer>
      <SettingsContainer>
        <LanguagePicker />
        <UserMenu />
      </SettingsContainer>
    </HeaderContainer>
  );
};

export default AppHeaderBase;
