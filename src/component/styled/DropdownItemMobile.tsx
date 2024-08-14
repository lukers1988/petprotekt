import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

const DropdownItemMobile = styled(Dropdown.Item)<{ $breakpoint: number }>`
    ${({ $breakpoint }) => `
    @media (max-width: ${$breakpoint}px) {
      height: 100px;
      width: 90vw;
      display: flex;
      align-items: center;
    }
  `}
`;

export default DropdownItemMobile;
