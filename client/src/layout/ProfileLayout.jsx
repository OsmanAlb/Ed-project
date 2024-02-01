import { useState } from 'react'
import TopBlockProfile from '../components/TopBlockProfile'
import { Button } from '../components/ui/Button'
import AccountBalance from '../components/AccountBalance'
import { ProfileInfo } from '../components/ProfileInfo'
import { BadgeItem } from '../components/BadgeItem'

const ProfileLayout = ({ userRole, userData }) => {
	const [activeTab, setActiveTab] = useState(0)
	return (
		<div
			className={`flex flex-col gap-[35px] ${
				userRole === 'student' ? 'pb-[117px]' : 'pb-[28px]'
			}`}
		>
			<TopBlockProfile
				userImage={userData.userImage}
				userName={userData.userName}
				nickName={userData.nickName}
			/>
			{userRole === 'teacher' && (
				<AccountBalance
					balance={userData.balance}
					approved={userData.approved}
					pending={userData.pending}
				/>
			)}
			<div className='flex'>
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
			<div
				className={`${
					userRole === 'student' ? 'mb-[35px]' : 'mb-[20px]'
				}`}
			>
				{activeTab === 0 && <ProfileInfo />}
				{activeTab === 1 && (
					<div className='flex flex-col gap-[10px] w-full'>
						{userData.bages.map((bage, i) => (
							<BadgeItem
								key={i}
								title={bage.title}
								subtitle={bage.subtitle}
							/>
						))}
					</div>
				)}
			</div>
			<div className='flex flex-col items-center gap-[35px] w-full mx-auto absolute left-0 bottom-0'>
				{userRole === 'student' && (
					<Button variant='outline' className='!rounded-[4px]'>
						Become Premium
					</Button>
				)}
				<Button
					className='font-semibold text-[18px] leading-[28px] '
					size='small'
					variant='ghost-primary'
				>
					LOG OUT
				</Button>
			</div>
		</div>
	)
}

export default ProfileLayout
