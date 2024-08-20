import {
  ProfileMenuToggle,
  ProfileDropdownContainer,
  UserAvatar,
  GreetingContainer,
  ProfileDropdownMenuContainer,
  DowndropMenuItem
} from '@appComponents/app/AppHeader/styled/UserMenuStyles';
import placeholderAvatar from '@appImages/placeholder-user-avatar.png';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userMenuItems from '@appComponents/app/AppHeader/data/UserManuItems';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const UserMenu = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ProfileDropdownContainer>
      <ProfileMenuToggle>
        {/* TODO - set user evetar */}
        <UserAvatar src={placeholderAvatar} />
        <GreetingContainer>
          {/* TODO - set username */}
          {`${t('common:greeting')}`}, <strong>User</strong>
        </GreetingContainer>
      </ProfileMenuToggle>
      <ProfileDropdownMenuContainer>
        {userMenuItems.map((item) => (
          <DowndropMenuItem
            key={item.id}
            onClick={() => {
              item.onClick()(dispatch, navigate);
            }}
          >
            <FontAwesomeIcon color={item.iconColor} icon={item.icon} />
            {t(`auth:${item.label}`)}
          </DowndropMenuItem>
        ))}
      </ProfileDropdownMenuContainer>
    </ProfileDropdownContainer>
  );
};

export default UserMenu;
