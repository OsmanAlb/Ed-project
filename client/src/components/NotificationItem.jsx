import { BellIcon } from './ui/icons/BellIcon'

const NotificationItem = ({ topText, bottomText, time }) => {
	return (
		<div className={`flex gap-[10px] my-[20px]`}>
			<div className={`flex gap-[10px]`}>
				<div
					className='h-[30px] w-[30px] p-[7px] bg-[#FDFDFD] 
                     rounded-md shadow-[0_4px_30px_0px_rgba(0,0,0,0.15)]'
				>
					<BellIcon />
				</div>
				<div className='flex flex-col gap-[5px] max-w-[240px]'>
					<p className={`text-[14px] leading-[24px] text-[#181818]`}>
						{topText}
					</p>
					<p className='text-[12px] leading-[22px] text-[#4F4F4F]'>
						{bottomText}
					</p>
				</div>
				<div className='shrink-0'>
					<p className='text-[10px] leading-[20px] text-[#4F4F4F]'>
						{time}
					</p>
				</div>
			</div>
		</div>
	)
}

export default NotificationItem

/*
import NotificationItem from '../components/NotificationItem'

<NotificationItem
				topText={'High School Algebra I: Help and Review'}
				bottomText={
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				}
				time={'1 min ago'}
			/>
*/
