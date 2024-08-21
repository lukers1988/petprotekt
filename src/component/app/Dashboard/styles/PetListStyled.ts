import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const PetContainer = styled(Card)`
  min-width: 320px;
  height: 200px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

export const PetPhoto = styled(Card.Img)`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
`;
