import {
  MainContainer,
  Separator,
  PopularArticlesContainer,
  CategoriesContainer,
  Category
} from '@appComponents/blog/styles/BlogSideContentStyled';
import PopularArticleCard from '@appComponents/blog/PopularArticleCard';

const BlogSideContent = () => {
  return (
    <MainContainer>
      <Separator />
      <PopularArticlesContainer>
        <PopularArticleCard />
        <PopularArticleCard />
        <PopularArticleCard />
      </PopularArticlesContainer>
      <Separator />
      <CategoriesContainer>
        <Category>Categories</Category>
        <Category>Categories</Category>
        <Category>Categories</Category>
        <Category>Categories</Category>
        <Category>Categories</Category>
      </CategoriesContainer>
    </MainContainer>
  );
};

export default BlogSideContent;
