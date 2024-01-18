import { BadgeItem } from './BadgeItem'

export const Badges = () => {
	return (
		<div className='flex flex-col gap-[10px] w-full'>
			<BadgeItem
				title='Good Listener'
				subtitle='Lorem ipsum dolor sit amet'
			/>
			<BadgeItem title='Focused' subtitle='Lorem ipsum dolor sit amet' />
			<BadgeItem
				title='Fast Learner'
				subtitle='Lorem ipsum dolor sit amet'
			/>
			<BadgeItem
				title='Story Teller'
				subtitle='Lorem ipsum dolor sit amet'
			/>
			<BadgeItem title='Champion' subtitle='Lorem ipsum dolor sit amet' />
		</div>
	)
}
