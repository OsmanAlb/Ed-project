import React from 'react'
import { Button } from '../components/ui/Button'

const AccountBalance = ({ balance, approved, pending }) => {
	return (
		<div className='flex flex-col gap-[10px] px-[20px] py-[10px] bg-[#FDFDFD] rounded-[6px] shadow-[0_2px_30px_0px_rgba(0,0,0,0.08)]'>
			<div className='flex flex-col'>
				<p className='text-[12px] leading-[22px] text-[#4F4F4F]'>
					Your Balance
				</p>
				<div className='flex items-center justify-between'>
					<div>
						<p className='text-[24px] leading-[28px] text-[#333333]'>
							{`$${balance}`}
						</p>
					</div>
					<Button
						variant='primary'
						size='middle'
						className='!w-[105px] !rounded-[4px]'
					>
						Withdraw
					</Button>
				</div>
			</div>
			<div className='flex mx-[-20px]'>
				<div className='flex flex-col flex-[1_1_50%]'>
					<p className='text-center text-[12px] leading-[22px] text-[#4F4F4F]'>
						Approved
					</p>
					<p className='text-center text-[18px] leading-[28px] text-[#4C6ED7]'>
						{`$${approved}`}
					</p>
				</div>
				<div className='flex flex-col flex-[1_1_50%]'>
					<p className='text-center text-[12px] leading-[22px] text-[#4F4F4F]'>
						Pending
					</p>
					<p className='text-center text-[18px] leading-[28px] text-[#4C6ED7]'>
						{`$${pending}`}
					</p>
				</div>
			</div>
		</div>
	)
}

export default AccountBalance
