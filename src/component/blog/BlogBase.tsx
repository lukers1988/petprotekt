import Header from '@appComponents/landing/Header';
import {
  BlogParentContainer,
  BlogContent,
  MenuToggle
} from '@appComponents/blog/styles/BlogBaseStyled';
import BlogMainContent from '@appComponents/blog/BlogMainContent';
import BlogSideContent from '@appComponents/blog/BlogSideContent';
import TopScrollButton from '@appComponents/common/TopScrollButton';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleBlogMenu } from '@appStore/AppSettingsReducer';
import { useDispatch } from 'react-redux';

const BlogBase = () => {
  const dispatch = useDispatch();

  return (
    <BlogParentContainer>
      <Header />
      <BlogContent>
        <BlogMainContent />
        <BlogSideContent />
      </BlogContent>
      <TopScrollButton />
      <MenuToggle onClick={() => dispatch(toggleBlogMenu())}>
        <FontAwesomeIcon size="2x" icon={faChevronLeft} />
      </MenuToggle>
    </BlogParentContainer>
  );
};

export default BlogBase;
