import {
  HomeIconActive,
  CourseIconActive,
  NavProfileIconActive,
  CourseIcon,
  HomeIcon,
  NavProfileIcon,
} from '../components/ui/icons';
import { classNames } from '../utils/classNames';
import { useScrollVisibility } from '../hooks/useScrollVisibility';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const isVisible = useScrollVisibility();
  const location = useLocation();
  const currentRoute = location.pathname;

  const isHome = currentRoute === '/';
  const isCourses = currentRoute === '/courses';
  const isProfile = currentRoute === '/profile';

  const navLinkClasses = (isActive) =>
    classNames(
      'w-[93px] h-[38px] flex justify-center items-center',
      isActive ? 'text-accent translate-x-0' : 'translate-x-5'
    );

  return (
    <nav
      className={classNames(
        'sticky flex justify-between items-center gap-[16px] bottom-0 h-[68px] w-[375px] mx-auto px-[16px] bg-background border-t-2 border-gray-200/50 z-10 transition',
        isVisible ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <Link to="/" className={navLinkClasses(isHome)}>
        {isHome ? <HomeIconActive /> : <HomeIcon />}
        <span
          className={classNames(
            'ml-[5px] transition-all',
            isHome ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
          )}
        >
          Home
        </span>
      </Link>
      <Link to="/courses" className={navLinkClasses(isCourses)}>
        {isCourses ? <CourseIconActive /> : <CourseIcon />}
        <span
          className={classNames(
            'ml-[5px] transition-all',
            isCourses ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
          )}
        >
          Courses
        </span>
      </Link>
      <Link to="/profile" className={navLinkClasses(isProfile)}>
        {isProfile ? <NavProfileIconActive /> : <NavProfileIcon />}
        <span
          className={classNames(
            'ml-[5px] transition-all',
            isProfile ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
          )}
        >
          Profile
        </span>
      </Link>
    </nav>
  );
};
