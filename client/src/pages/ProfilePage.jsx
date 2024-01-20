import { useState } from 'react'
import { Badges } from '../components/Badges'
import { ProfileInfo } from '../components/ProfileInfo'
import { Button } from '../components/ui/Button'

const ProfilePage = () => {
	const [activeTab, setActiveTab] = useState(0)

	return (
		<div className='flex pt-[10px] flex-col items-center font-normal'>
			<div className='w-[100px] h-[100px] mb-[20px]'>
				<img src='/src/assets/images/profile.png' alt='' />
			</div>
			<h2 className='text-[18px] mb-[5px]'>Christina Angela</h2>
			<p className='text-[12px] text-secondary mb-5'>
				@angela.christina123
			</p>
			<div className='mb-[37px]'>
				<Button
					onClick={() => setActiveTab(0)}
					variant={activeTab === 0 ? 'primary' : 'ghost-secondary'}
				>
					General
				</Button>
				<Button
					onClick={() => setActiveTab(1)}
					variant={activeTab === 1 ? 'primary' : 'ghost-secondary'}
				>
					Badges
				</Button>
			</div>
			{activeTab === 0 && <ProfileInfo />}
			{activeTab === 1 && <Badges />}
			<Button className='my-[35px]' variant='outline'>
				Become Premium
			</Button>
			<Button
				className='font-semibold text-[18px] leading-[28px]'
				size='small'
				variant='ghost-primary'
			>
				LOG OUT
			</Button>
		</div>
	)
}

export default ProfilePage
