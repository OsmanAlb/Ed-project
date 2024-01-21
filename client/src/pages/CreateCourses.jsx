import React from 'react'
import BackBar from '../components/BackBar'
import Uploader from '../components/Uploader'
import { Button } from '../components/ui/Button'
import Dropdown from '../components/ui/Dropdown'

const CreateCourses = () => {
	return (
		<div className='flex flex-col text-12px leading-[22px] gap-[25px]'>
			<BackBar text='Create New Chapter'></BackBar>
			<div>
				<h2 className="mb-[10px] text-[#000000]">Lesson Name</h2>
				<p className='mb-[5px] text-[#181818]'>High School Algebra I: Help and Review</p>
			</div>
			<div className='border-b-[1px] border-[#E0E0E0]'>
			<div className='flex gap-[74px]'>
				<h2 className="mb-[15px]">Chapter</h2>
				<h2>Lesson</h2>
			</div>
			<div className='flex gap-[70px] mb-[35px]'>
				<p>1 Chaper</p>
				<Dropdown variant='white' selected='4 Lesson' />
			</div>
			</div>
			<div>
				<p className='mb-[15px]'>Chapter</p>
				<button className='p-[9px] w-full bg-[#FDFDFD] border-[1px] border-[#E0E0E0] rounded-[4px] text-[#181818]'>Algebraic Equations and Expressions</button>
			</div>
			<Uploader />
			<Button className='mt-[35px] w-full' variant ='primary'>Upload</Button>
		</div>
	)
}

export default CreateCourses