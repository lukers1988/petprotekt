// SideMenuBaseStyles.tsx
import styled from 'styled-components';

export const SideMenuContainer = styled.div<{ show: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  padding-top: 20px;
  transition: left 0.3s ease;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
    position: absolute;
    left: ${(props) => (props.show ? '0' : '-320px')};
    z-index: 20;
    height: calc(100% - 80px);
  }
`;

export const MenuItemContainer = styled.div`
    margin: 10px 0px;
`;
