import { Link } from 'react-router-dom';
import { classNames } from '../../utils/classNames';

export const Button = ({
  className,
  children,
  link,
  rounded = true,
  variant = 'primary',
  size = 'default',
  ...props
}) => {
  const buttonClasses = classNames(
    'cursor-pointer select-none border-[1px] [outline:none] transition duration-500',
    rounded ? 'rounded-[4px]' : '',
    variant === 'primary'
      ? 'bg-accent border-accent hover:brightness-125 text-white'
      : '',
    variant === 'secondary'
      ? 'bg-slate-500 hover:bg-slate-400 focus:ring-slate-300 text-white'
      : '',
    variant === 'third'
      ? ' bg-[#FDFDFD] border-[#E0E0E0] text-[#333333] hover:bg-accent hover:text-white '
      : '',
    variant === 'outline'
      ? 'text-accent  border-accent hover:bg-accent hover:text-white'
      : '',
    variant === 'ghost-primary'
      ? 'text-accent  border-none hover:brightness-125'
      : '',
    variant === 'ghost-secondary'
      ? 'text-secondary  border-none hover:brightness-50 hover:text-white'
      : '',
    size === 'default' ? 'px-[60px] py-[15px] text-[14px] leading-[24px]' : '',
    size === 'middle' ? 'w-[81px] py-[9px] text-[12px] leading-[22px] ' : '',
    size === 'small' ? 'p-0 text-[12px] leading-[22px]' : '',
    className
  );

  if (link) {
    return (
      <Link to={link} className={buttonClasses} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}
