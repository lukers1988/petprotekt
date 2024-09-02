import {
  MainContainer,
  LatestArticle,
  CategorySeparator,
  ArticleList,
  ArtricleColumn
} from '@appComponents/blog/styles/BlogMainContentStyled';
import { Container, Row } from 'react-bootstrap';
import ArticleCard from '@appComponents/blog/ArticleCard';

const BlogMainContent = () => {
  return (
    <MainContainer>
      <LatestArticle />
      <CategorySeparator />
      <ArticleList>
        <Container>
          <Row className="justify-content-center">
            <ArtricleColumn>
              <ArticleCard />
            </ArtricleColumn>
            <ArtricleColumn>
              <ArticleCard />
            </ArtricleColumn>
            <ArtricleColumn>
              <ArticleCard />
            </ArtricleColumn>
            <ArtricleColumn>
              <ArticleCard />
            </ArtricleColumn>
          </Row>
        </Container>
      </ArticleList>
    </MainContainer>
  );
};

export default BlogMainContent;
