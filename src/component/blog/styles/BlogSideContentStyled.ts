import { universalGreen } from '@appConst/colors';
import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 30%;
  height: 100%;
  /* background-color: blue; */
  padding: 10px;
  height: 100%;
  padding: 10px;

  @media (max-width: 1024px) {
    position: absolute;
    right: -600px;
    width: 50%;
  }
`;

export const Separator = styled.div`
  background-color: ${universalGreen};
  width: 100%;
  height: 40px;
  border-radius: 10px;
`;

export const PopularArticlesContainer = styled.div`
  width: 100%;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const CategoriesContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Category = styled.li`
  cursor: pointer;
  padding: 5px;
  border-radius: 3px;

  &:hover {
    background-color: #afe9bf;
    transition: background-color 0.3s ease;
  }
`;
