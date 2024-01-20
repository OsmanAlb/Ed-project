import React from 'react'
import Uploader from '../components/Uploader'
import { Button } from '../components/ui/Button'
import Dropdown from '../components/ui/Dropdown'

const CreateCourses = () => {
	return (
		<div className='text-12px leading-[22px]'>
			<h2 className="mb-[10px]">Lesson Name</h2>
			<p className='mb-[30px]'>High School Algebra I: Help and Review</p>
			<div className='flex gap-[74px]'>
				<h2 className="mb-[15px]">Chapter</h2>
				<h2 className="mb-[10px]">Lesson</h2>
			</div>
			<div className='flex gap-[70px] mb-[35px]'>
				<p>1 Chaper</p>
				<Dropdown variant='white' selected='4 Lesson' />
			</div>
			<Uploader />
			<Button className='mt-[35px] w-full' variant = 'primary'>Upload</Button>
		</div>
	)
}

export default CreateCourses