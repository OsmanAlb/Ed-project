
import { SearchIcon } from './icons/SearchIcon';

const Input = (props) => {
	return (
		<div className="flex gap-3 bg-[#F2F2F2] border border-[#E0E0E0] p-[15px] mb-6 rounded-md">
			<SearchIcon />
			<input
				placeholder="Search"
				className="text-12px leading-[22px] bg-inherit outline-none text-[#4F4F4F]" {...props}
			/>
		</div>
	)
}

export default Input