import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { danger } from '@appConst/colors';
import { Dispatch, UnknownAction } from 'redux';
import { logout } from '@appStore/UserReducer';
import { NavigateFunction } from 'react-router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const userMenuItems = [
  {
    id: 'logout',
    icon: faArrowRightFromBracket,
    iconColor: danger,
    label: 'logout',
    onClick: () => (dispatch: Dispatch<UnknownAction>) => {
      dispatch(logout());
    }
  }
] as {
  id: string;
  icon: IconProp;
  iconColor: string;
  label: string;
  onClick: () => (dispatch: Dispatch<UnknownAction>, navigate: NavigateFunction) => void;
}[];

export default userMenuItems;
