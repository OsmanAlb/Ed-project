import { classNames } from '../utils/classNames'
import { ClockIcon } from './ui/icons/ClockIcon'

export const CourseCard = ({ title }) => {
	return (
		<div className='min-w-[139px] max-w-[139px] h-[188px] rounded-md'>
			<img src='/src/assets/images/course.png' alt='course' />
			<h3 className='my-[5px] overflow-hidden  line-clamp-2'>{title}</h3>
			<div className='flex justify-between text-[10px] leading-5'>
				<span>12 Lessons</span>
				<span className='flex gap-[5px]'>
					<ClockIcon />
					<span>12h 20m</span>
				</span>
			</div>
		</div>
	)
}
