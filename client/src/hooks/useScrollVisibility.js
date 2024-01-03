import { useEffect, useState } from 'react';

export const useScrollVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (
        currentScroll > lastScroll &&
        window.innerHeight + currentScroll < document.body.offsetHeight
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isVisible;
};
