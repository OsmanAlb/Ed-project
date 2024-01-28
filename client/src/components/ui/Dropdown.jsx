import { useRef, useState } from 'react'
import { DropdownIcon } from '../ui/icons/DropdownIcon'

const Dropdown = ({
	selected,
	setSelected,
	label,
	defaultValue,
	options,
	variant
}) => {
	const [isActive, setIsActive] = useState(false)
	const dropdown = useRef()

	const variants = {
		grey: {
			dropdown: 'w-[162px]',
			dropdownBtn: `py-[11px] px-[15px] bg-[#F2F2F2] 
          ${selected ? 'text-[#181818]' : 'text-[#BDBDBD]'}`,
			dropdownContent: 'bg-[#F2F2F2]'
		},
		white: {
			dropdown: 'w-[85px]',
			dropdownBtn: 'py-[8px] px-[5px] bg-[#FDFDFD] text-[#181818]',
			dropdownContent: 'bg-[#FDFDFD]'
		}
	}

	const closeDropdown = e => {
		if (!dropdown.current?.contains(e.target)) {
			setIsActive(false)
		}
	}

	document.body.addEventListener('click', closeDropdown)

	return (
		<div className='flex flex-col'> 
			<div className='label text-[12px] text-[#181818] leading-[22px]'>
				{label}
			</div>
			<div className={`dropdown relative ${variants[variant].dropdown}`}>
				<div
					ref={dropdown}
					className={`dropdown-btn flex justify-between items-center
                      text-[12px] leading-[22px] border-[1px] border-[#E0E0E0]
                      rounded-[4px] outline-none cursor-pointer
                      ${variants[variant].dropdownBtn}
                      ${isActive && 'transform [&_svg]:rotate-180'}
                    `}
					onClick={e => setIsActive(!isActive)}
				>
					{' '}
					{selected ? selected : defaultValue}
					{variant === 'grey' ? (
						<DropdownIcon width={'24'} height={'24'} />
					) : (
						<DropdownIcon width={'16'} height={'16'} />
					)}
				</div>
				{isActive && (
					<div
						className={`dropdown-content absolute top-[105%]
                        flex flex-col gap-[10px] w-full py-[10px] left-0 font-medium text-[#333] 
                        box-content border-[1px] border-[#E0E0E0] 
                        rounded-[4px] outline-none cursor-pointer
                        ${variants[variant].dropdownContent}
                        `}
					>
						{options.map((option, i) => (
							<div
								key={i}
								onClick={e => {
									setSelected(option)
									setIsActive(false)
								}}
								className='dropdown-item cursor-pointer px-[5px]
                         transition-all delay-200 hover: bg-[#f4ftat4]'
							>
								{option}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default Dropdown
