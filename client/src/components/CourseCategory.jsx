import { classNames } from '../utils/classNames';

export const CourseCategory = ({ name, active }) => {
  return (
    <h2
      className={classNames(
        'w-[114px] text-sm leading-6 py-[15px] text-center cursor-pointer',
        active ? 'active-category' : 'text-secondary'
      )}
    >
      {name}
    </h2>
  );
};
