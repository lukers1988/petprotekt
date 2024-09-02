import { useEffect } from 'react';
import { useLocation } from 'react-router';
import BlogBase from '@appComponents/blog/BlogBase';

const Blog = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      window.history.replaceState(null, '', ' ');
    }
  }, [location]);

  return <BlogBase />;
};

export default Blog;
