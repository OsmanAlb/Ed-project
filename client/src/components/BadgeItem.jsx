import { BadgeIcon } from './ui/icons/BadgeIcon'

export const BadgeItem = ({ title, subtitle }) => {
	return (
		<div className='flex items-start gap-[10px]'>
			<div className='w-6 h-6 p-1 bg-white rounded-md shadow-md'>
				<BadgeIcon />
			</div>

			<div className='flex flex-col'>
				<p>{title}</p>
				<p className='text-[10px] leading-5 text-secondary'>
					{subtitle}
				</p>
			</div>
		</div>
	)
}
