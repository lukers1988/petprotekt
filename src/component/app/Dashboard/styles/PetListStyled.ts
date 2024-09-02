import { Card, Col } from 'react-bootstrap';
import styled from 'styled-components';

export const PetContainer = styled(Card)`
  min-width: 290px;
  height: 200px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px;
  font-size: 14px;
`;

export const PetPhoto = styled(Card.Img)`
  width: 100px;
  height: 100px;
`;

export const PetColumn = styled(Col)`
  max-width: 350px;
`;

export const PetCardBody = styled(Card.Body)`
  display: flex;
  justify-content: space-between;
`;

export const PetInfoContainer = styled.div`
  max-width: 170px;
`;

