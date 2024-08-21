import {
  HeaderContainer,
  LogoContainer
} from '@appComponents/app/AppHeader/styles/AppHeaderBaseStyles';
import DogIcon from '@appImages/dog.svg';
import { useNavigate } from 'react-router';
import UserMenu from '@appComponents/app/AppHeader/UserMenu';

const AppHeaderBase = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LogoContainer>
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
      <UserMenu />
    </HeaderContainer>
  );
};

export default AppHeaderBase;
