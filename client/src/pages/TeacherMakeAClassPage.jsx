import { ChevronRight } from '../components/ui/icons'
import { Button } from '../components/ui/Button'

export const TeacherMakeAClassPage = () => {
	return (
		<div>
			<div className='bg-[#4C6ED7] h-[175px] rounded-[0_0_100vh_100vh]'>
				<h2 className='text-center text-background font-inter text-[24px] pt-[43.74999999999999px] px-[35px] pb-[60.37499999999999px]'>
					What do You Want to teach today
				</h2>
			</div>
			<div className='px-[16px] mt-[37px]'>
				<div>
					<div className=' mb-[20px] grid grid-cols-2 gap-[19px]'>
						<div className=''>
							<span className='text-[#181818] text-[12px] font-inter font-medium'>
								Category
							</span>
							<div className='relative'>
								<input
									placeholder='e.g., biology'
									type='text'
									className='mt-[10px] border border-[#E0E0E0] bg-[#F2F2F2] rounded-[4px] h-[46px] w-[100%] text-[#181818] placeholder:opacity-65 py-[12px] pl-[15px] outline-none'
								/>
								<span className='absolute top-[38%] right-[10px]'>
									<Button
										className='rotate-90'
										type='button'
										variant='ghost-secondary'
										size='small'
									>
										<ChevronRight />
									</Button>
								</span>
							</div>
						</div>
						<div>
							<span className='text-[#181818] text-[12px] font-inter font-medium'>
								Class
							</span>
							<div className='relative'>
								<input
									placeholder='e.g., Junior High...'
									type='text'
									className='mt-[10px] border border-[#E0E0E0] bg-[#F2F2F2] rounded-[4px] h-[46px] w-[100%] text-[#181818] placeholder:opacity-65 py-[12px] pl-[15px] outline-none'
								/>
								<span className='absolute top-[38%] right-[10px]'>
									<Button
										className='rotate-90'
										type='button'
										variant='ghost-secondary'
										size='small'
									>
										<ChevronRight />
									</Button>
								</span>
							</div>
						</div>
					</div>
					<div className=' mb-[20px] grid grid-cols-2 gap-[19px]'>
						<div>
							<span className='text-[#181818] text-[12px] font-inter font-medium'>
								How Many Student?
							</span>
							<div className='relative'>
								<input
									placeholder='e.g., 40 students'
									type='text'
									className='mt-[10px] border border-[#E0E0E0] bg-[#F2F2F2] rounded-[4px] h-[46px] w-[100%] text-[#181818] placeholder:opacity-65 py-[12px] pl-[15px] outline-none'
								/>
								<span className='absolute top-[38%] right-[10px]'>
									<Button
										className='rotate-90'
										type='button'
										variant='ghost-secondary'
										size='small'
									>
										<ChevronRight />
									</Button>
								</span>
							</div>
						</div>
						<div>
							<span className='text-[#181818] text-[12px] font-inter font-medium'>
								Duration
							</span>
							<div className='relative'>
								<input
									placeholder='e.g., 1 month'
									type='text'
									className='mt-[10px] border border-[#E0E0E0] bg-[#F2F2F2] rounded-[4px] h-[46px] w-[100%] text-[#181818] placeholder:opacity-65 py-[12px] pl-[15px] outline-none'
								/>
								<span className='absolute top-[38%] right-[10px]'>
									<Button
										className='rotate-90'
										type='button'
										variant='ghost-secondary'
										size='small'
									>
										<ChevronRight />
									</Button>
								</span>
							</div>
						</div>
					</div>
					<div className=' mb-[20px]'>
						<div>
							<span className='text-[#181818] text-[12px] font-inter font-medium'>
								Name Your Course?
							</span>
							<div>
								<input
									placeholder='e.g., how do plants photosynthesize'
									type='text'
									className='mt-[10px] border border-[#E0E0E0] bg-[#F2F2F2] rounded-[4px] h-[46px] w-[100%] text-[#181818] placeholder:opacity-65 py-[12px] pl-[15px] outline-none'
								/>
							</div>
						</div>
					</div>
					<div className='text-center'>
						<Button className='w-[311px]'>Make Your Class</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
