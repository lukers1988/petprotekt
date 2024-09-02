import {
  MainContainer,
  Separator,
  PopularArticlesContainer,
  CategoriesContainer,
  Category,
  MenuToggleIcon
} from '@appComponents/blog/styles/BlogSideContentStyled';
import PopularArticleCard from '@appComponents/blog/PopularArticleCard';
import { useSelector } from 'react-redux';
import { RootStateType } from '@appStore/store';
import { path } from 'ramda';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { toggleBlogMenu } from '@appStore/AppSettingsReducer';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const BlogSideContent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const menuOpened = useSelector((state: RootStateType) =>
    path(['appSettings', 'blogMenuOpen'], state)
  );

  return (
    <MainContainer opened={menuOpened}>
      <Separator>
        <h3>{t('blog:popularArticles')}</h3>
        <MenuToggleIcon
          opened={menuOpened}
          size="2x"
          icon={faChevronRight}
          onClick={() => dispatch(toggleBlogMenu())}
        />
      </Separator>
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
