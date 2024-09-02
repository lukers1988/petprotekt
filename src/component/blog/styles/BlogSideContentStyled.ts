import { universalGreen } from '@appConst/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const MainContainer = styled.div<{ opened: boolean }>`
  width: 30%;
  height: 100%;
  padding: 10px;
  height: 100%;
  padding: 10px;
  transition: right 0.3s ease;

  @media (max-width: 1024px) {
    position: absolute;
    right: ${(props) => (props.opened ? '0' : '-1000px')};
    background-color: #e9ecef;
    width: 80%;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
`;

export const Separator = styled.div`
  background-color: ${universalGreen};
  width: 100%;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;

  h3 {
    margin: 0;
  }
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

export const MenuToggleIcon = styled(FontAwesomeIcon)<{ opened: boolean }>`
  cursor: pointer;
  display: ${(props) => (!props.opened ? 'none' : 'block')};
`;
