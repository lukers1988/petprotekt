import Header from '@appComponents/landing/Header';
import { BlogParentContainer, BlogContent } from '@appComponents/blog/styles/BlogBaseStyled';
import BlogMainContent from '@appComponents/blog/BlogMainContent';
import BlogSideContent from '@appComponents/blog/BlogSideContent';

const BlogBase = () => {
  return (
    <BlogParentContainer>
      <Header />
      <BlogContent>
        <BlogMainContent />
        <BlogSideContent />
      </BlogContent>
    </BlogParentContainer>
  );
};

export default BlogBase;
