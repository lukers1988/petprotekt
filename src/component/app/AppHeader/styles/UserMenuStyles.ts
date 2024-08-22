import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';

export const ProfileMenuToggle = styled(Dropdown.Toggle)`
  height: 60px;
  display: flex;
  flex-direction: row;
  background-color: rgb(54 201 95 / 10%);
  align-items: center;
  justify-content: space-between;
  color: #2ba14c;
  border-radius: 30px;
`;

export const ProfileDropdownContainer = styled(Dropdown)`
  margin-right: 10px;
`;

export const UserAvatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

export const GreetingContainer = styled.div`
  margin: 0px 20px 0px 20px;
`;

export const ProfileDropdownMenuContainer = styled(Dropdown.Menu)`
  width: 100%;
`;

export const DowndropMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  cursor: pointer;
`;
