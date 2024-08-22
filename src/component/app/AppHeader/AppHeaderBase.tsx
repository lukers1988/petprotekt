import {
  HeaderContainer,
  LogoContainer,
  SettingsContainer
} from '@appComponents/app/AppHeader/styles/AppHeaderBaseStyles';
import DogIcon from '@appImages/dog.svg';
import { useNavigate } from 'react-router';
import UserMenu from '@appComponents/app/AppHeader/UserMenu';
import LanguagePicker from '@appComponents/common/LanguagePicker';

const AppHeaderBase = () => {
  const navigate = useNavigate();

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
        <h2>PetProtekt</h2>
      </LogoContainer>
      <SettingsContainer>
        <LanguagePicker />
        <UserMenu />
      </SettingsContainer>
    </HeaderContainer>
  );
};

export default AppHeaderBase;
