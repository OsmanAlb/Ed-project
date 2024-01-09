import React from 'react'
import { Button } from '../ui/Button'
import { ClockIcon } from '../ui/icons/ClockIcon'
import { Students } from '../ui/icons/Students'

const CourseItem = () => {
	return (
		<div className="flex gap-[10px] overflow-x-auto scrollbar-hide mx-4 my-5 relative">
			<img className='w-[171px] h-[162px] rounded-md' src="/src/assets/images/course.png" alt="course" />
			<div className='flex flex-col'>
				<h3 className="my-[5px]">Bacterial Biology Overview</h3>
				<div className="flex text-[10px] leading-5 justify-between">
					<span>10 Chapter</span>
					<div className='flex mb-2.5'>
						<ClockIcon />
						<span>12h 20m</span>
					</div>
				</div>
				<div className='flex'>
					<Students />
					<span className='text-[10px] leading-5 mx-[5px]'>
						254 Students
					</span>
				</div>
				<div className='flex absolute bottom-0'>
					<Button variant='third' size='middle'>View</Button>
					<Button variant='third' size='middle'>Discuss</Button>
				</div>
			</div>
		</div >
	)
}

export default CourseItem