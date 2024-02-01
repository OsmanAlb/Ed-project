import { Button } from '../components/ui/Button'
import { ClockIcon } from '../components/ui/icons/ClockIcon'
import { StudentsIcon } from '../components/ui/icons/StudentsIcon'

const CourseItem = () => {
	return (
		<div className='flex gap-[10px] overflow-x-auto scrollbar-hide relative'>
			<img
				className='w-[171px] h-[162px] rounded-md relative'
				src='/src/assets/images/course.png'
				alt='course'
			/>
			<button className='bg-[#FDFDFD] absolute m-2.5 rounded-[6px] text-accent px-[20px] py-[5px] text-[10px] font-semibold leading-[20px] text-center'>
				Biology
			</button>
			<div className='flex flex-col'>
				<h3 className='gap-y-[5px] mb-[10px] text-[#181818] text-wrap'>
					Bacterial Biology Overview
				</h3>

				<div className='h-full text-[10px] text-[#4F4F4F]'>
					<span className='mb-[5px] block'>10 Chapter</span>
					<div className='flex items-center mb-[5px]'>
						<ClockIcon />
						<span className='mx-[5px]'>12h 20m</span>
					</div>
					<div className='flex items-center text-[#4F4F4F]'>
						<StudentsIcon />
						<span className='text-[10px] mx-[5px]'>
							254 Students
						</span>
					</div>
				</div>
				<div className='flex'>
					<Button variant='third-left' size='middle'>
						View
					</Button>
					<Button variant='third-right' size='middle'>
						Discuss
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CourseItem
