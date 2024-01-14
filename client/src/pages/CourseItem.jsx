import { Button } from '../components/ui/Button'
import { ClockIcon } from '../components/ui/icons/ClockIcon'
import { StudentsIcon } from '../components/ui/icons/StudentsIcon'

const CourseItem = () => {
	return (
		<div className="flex gap-[10px] overflow-x-auto scrollbar-hide relative">
			<img className='w-[171px] h-[162px] rounded-md relative' src="/src/assets/images/course.png" alt="course" />
			<button className='bg-[#FDFDFD] absolute m-2.5 rounded-[6px] text-accent px-[20px] py-[5px] text-[10px] font-semibold leading-[20px] text-center'>Biology</button>
			<div className='flex flex-col'>
				<h3 className="gap-y-[5px] text-[#181818] text-wrap">Bacterial Biology Overview</h3>
				<div className="flex text-[10px] leading-5 justify-between text-[#4F4F4F]">
					<span>10 Chapter</span>
					<div className='flex mb-2.5'>
						<ClockIcon />
						<span className='mx-[5px]'>12h 20m</span>
					</div>
				</div>
				<div className='flex text-[#4F4F4F]'>
					<StudentsIcon />
					<span className='text-[10px] leading-5 mx-[5px]'>
						254 Students
					</span>
				</div>
				<div className='flex absolute bottom-0'>
					<Button variant='third-left' size='middle'>View</Button>
					<Button variant='third-right' size='middle'>Discuss</Button>
				</div>
			</div>
		</div >
	)
}

export default CourseItem