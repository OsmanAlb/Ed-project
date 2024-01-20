import { classNames } from '../../utils/classNames'
import { SearchIcon } from './icons/SearchIcon'
import { SmileIcon } from './icons/SmileIcon'

export const Input = ({
	className,
	variant = 'search',
	placeholder,
	...props
}) => {
	const divInputClasses = classNames(
		'flex gap-3 mb-6',
		variant === 'search'
			? 'bg-[#F2F2F2] border border-[#E0E0E0] rounded-md p-[15px]'
			: '',
		variant === 'register'
			? 'border-b border-[#9D9B9B] bg-inherit p-[10px]'
			: '',
		variant === 'pay' ? 'border border-[#BDBDBD] rounded-md p-[10px]' : '',
		variant === 'chat'
			? 'mb-0 h-full items-center justify-between bg-[#F2F2F2] border border-[#E0E0E0] rounded-md pl-[20px] pr-[13px]'
			: '',
		className
	)

	const inputClasses = classNames(
		'bg-inherit outline-none text-[#181818]',
		variant === 'search' ? 'text-12px leading-[22px]' : '',
		variant === 'register' ? 'text-14px leading-[24px]' : '',
		variant === 'pay' ? 'text-12px leading-[22px]' : '',
		variant === 'chat' ? 'text-10px leading-[20px]' : '',
		className
	)

	return (
		<div className={divInputClasses}>
			{variant === 'search' && <SearchIcon />}
			<input
				placeholder={placeholder}
				className={inputClasses}
				{...props}
			/>
			{variant === 'chat' && <SmileIcon />}
		</div>
	)
}

export default Input
