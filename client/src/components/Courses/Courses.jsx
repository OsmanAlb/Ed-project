import React from 'react'
import CourseItem from './CourseItem'

const Courses = () => {
	return (
		<div className='flex flex-col gap-y-[20px]'>
			<CourseItem />
			<CourseItem />
			<CourseItem />
			<CourseItem />

		</div>
	)
}

export default Courses