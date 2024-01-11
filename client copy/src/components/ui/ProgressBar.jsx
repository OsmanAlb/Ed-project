import React from 'react'

export const ProgressBar = ({
	index,
	length,
	width = '100%',
	height = '6px'
}) => {
	const percentage = (index / length) * 100

	return (
		<span
			style={{ width, height }}
			className='flex items-center relative rounded-[10px] bg-[#8DA6F4] overflow-hidden'
		>
			<span
				style={{ width: `${percentage}%` }}
				className='absolute left-0 h-full rounded-[10px] bg-accent'
			></span>
		</span>
	)
}
