import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledLink = styled(Link)<{ active: boolean }>`
  font-size: 16px;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.active ? '#36C95F' : 'inherit')};
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: inherit;
    margin-right: 20px;
`;
