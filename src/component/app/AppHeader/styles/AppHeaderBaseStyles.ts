import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-left: 45px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;
