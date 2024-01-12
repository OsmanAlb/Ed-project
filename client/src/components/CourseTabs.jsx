import { useState } from 'react'
import { CourseCategory } from './CourseCategory'
import { CourseCard } from './CourseCard'
import { courseData } from '../data/courseData'

export const CourseTabs = () => {
	const [activeTab, setActiveTab] = useState(0)

	return (
		<div className='mb-[30px]'>
			<div className='flex mb-5'>
				{courseData.map((item, index) => {
					return (
						<CourseCategory
							name={item.name}
							active={activeTab === index}
							key={index}
							onClick={() => setActiveTab(index)}
						/>
					)
				})}
			</div>
			<div className='flex gap-[15px] overflow-x-auto scrollbar-hide -mx-4 px-4'>
				{courseData.map((tab, tabIndex) => {
					return tab.courses.map((item, index) => {
						if (activeTab === tabIndex) {
							return <CourseCard title={item} key={index} />
						}
					})
				})}
			</div>
		</div>
	)
}
