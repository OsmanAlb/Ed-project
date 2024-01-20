import { ClockIcon } from './ui/icons/ClockIcon'
import { CommentIcon } from './ui/icons/CommentIcon'

export const NewsCard = () => {
	return (
		<div className='flex gap-[10px]'>
			<img src='/src/assets/images/news.png' alt='news' />
			<div>
				<p className='text-[10px] leading-5 font-semibold text-secondary mb-[5px]'>
					Biology
				</p>
				<h2 className='mb-[26px]'>
					The Effects of Temperature on Enzyme Activity and Biology
				</h2>
				<div className='flex justify-between'>
					<div className='flex gap-[5px] items-center'>
						<ClockIcon />
						<p>1 hour ago</p>
					</div>
					<div className='flex gap-[5px] items-center'>
						<CommentIcon />
						<p>4795</p>
					</div>
				</div>
			</div>
		</div>
	)
}
