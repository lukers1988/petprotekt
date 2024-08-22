import { useState, useEffect } from 'react';

const useScreenWidth = (inputWidth?: number) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return inputWidth ? inputWidth > width : width;
};

export default useScreenWidth;
