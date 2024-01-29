import React from 'react'

const TopBlockProfile = ({ userImage, userName, nickName }) => {
	return (
		<div className='flex flex-col items-center pt-[50px] mb-[-15px]'>
			<div className='w-[100px] h-[100px] mb-[20px]'>
				<img src={userImage} alt='profileImage' />
			</div>
			<div className='mb-[5px]'>
				<p className='text-[18px] leading-[28px] text-[#000]'>
					{userName}
				</p>
			</div>
			<div>
				<p className='text-[12px] leading-[22px] text-[#4F4F4F]'>
					{`@${nickName}`}
				</p>
			</div>
		</div>
	)
}

export default TopBlockProfile
