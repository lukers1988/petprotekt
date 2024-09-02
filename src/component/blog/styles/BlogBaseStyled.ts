import { universalGreen } from '@appConst/colors';
import styled from 'styled-components';

export const BlogParentContainer = styled.div`
  max-width: 1440px;
  position: relative;
  margin: auto;
`;

export const BlogContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
`;

export const MenuToggle = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${universalGreen};
  position: absolute;
  top: 100px;
  right: 20px;
  cursor: pointer;
  opacity: 0.5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1025px) {
    display: none;
  }
`;
