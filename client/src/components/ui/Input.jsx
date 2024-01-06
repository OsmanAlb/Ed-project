
import { classNames } from '../../utils/classNames';
import { SearchIcon } from './icons/SearchIcon';

export const Input = ({
	className,
	link,
	variant = "search",
	...props
}) => {

	const divInputClasses = classNames(
		"flex gap-3 mb-6",
		variant === "search"
			? 'bg-[#F2F2F2] border border-[#E0E0E0] rounded-md p-[15px]'
			: '',
		variant === 'register'
			? 'border-b border-[#9D9B9B] bg-inherit p-[10px]'
			: '',
		className
	)

	const inputClasses = classNames(
		'bg-inherit outline-none',
		variant === "search"
			? 'text-12px leading-[22px] text-[#4F4F4F]'
			: '',
		variant === 'register'
			? 'text-14px leading-[24px] text-[#181818]'
			: '',
		className
	);

	if (link) {
		return (
			<Link to={link} className={inputClasses} {...props}>
				{children}
			</Link>
		);
	}

	return (
		<div className={divInputClasses}>
			{variant === "search" && <SearchIcon />}
			<input
				className={inputClasses} {...props}
			/>
		</div>
	)
}

export default Input