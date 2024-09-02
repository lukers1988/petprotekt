import styled from 'styled-components';
import { universalGreen } from '@appConst/colors';
import { Col } from 'react-bootstrap';

export const MainContainer = styled.div`
  width: 70%;
  height: 100%;
  /* background-color: red; */
  padding: 10px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const LatestArticle = styled.div`
  width: 100%;
  min-height: 400px;
  background-color: gray;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const CategorySeparator = styled.div`
  background-color: ${universalGreen};
  width: 100%;
  min-height: 40px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ArticleList = styled.div`
  width: 100%;
  overflow: scroll;
`;

export const ArtricleColumn = styled(Col)`
  max-width: 330px;
`;
