import ChatCard from '../components/ChatCard'
import BackBar from '../components/BackBar'
import Input from '../components/ui/Input'
import { MicIcon } from '../components/ui/icons/MicIcon'

const ChatPage = () => {
	return (
		<div className='bg-[#FAFAFA]'>
			<BackBar text={'High School Algebra I: Help and Review'} />
			<div className='flex flex-col gap-[20px] pt-[20px] pb-[30px]'>
				<ChatCard
					variant={'white'}
					width={'295px'}
					content={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nunc morbi vitae urna, urna elementum felis, laoreet.'
					}
					image={'/src/assets/images/chat.png'}
					time={'1 hour ago'}
				/>
				<ChatCard
					variant={'white'}
					width={'295px'}
					content={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nunc morbi vitae urna, urna elementum felis, laoreet.'
					}
					image={'/src/assets/images/chat.png'}
					time={'1 hour ago'}
				/>
				<ChatCard
					variant={'white'}
					width={'295px'}
					content={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
					}
					image={'/src/assets/images/chat.png'}
					time={'30 minute ago'}
				/>
				<ChatCard
					variant={'blue'}
					width={'295px'}
					content={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
					}
					image={'/src/assets/images/chat.png'}
					time={'1 hour ago'}
				/>
				<ChatCard
					variant={'blue'}
					width={'295px'}
					content={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
					}
					image={'/src/assets/images/chat.png'}
					time={'1 hour ago'}
				/>
				<ChatCard
					variant={'blue'}
					width={'295px'}
					content={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
					}
					image={'/src/assets/images/chat.png'}
					time={'1 hour ago'}
				/>
				<ChatCard
					variant={'white'}
					width={'295px'}
					content={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
					}
					image={'/src/assets/images/chat.png'}
					time={'1 hour ago'}
				/>
			</div>
			<div
				className='h-[90px] bg-[#FDFDFD]
                     shadow-[0_-1px_2px_0px_rgba(0,0,0,0.09)] py-[20px] 
                     mx-[-16px] pl-[16px] pr-[9px]'
			>
				<div className='flex justify-between items-center h-[50px] gap-[10px]'>
					<div className='h-full flex-auto'>
						<Input variant='chat' placeholder={'Message...'} />
					</div>
					<div
						className='h-full w-[55px] px-[15.5px] py-[13px] bg-[#FDFDFD] 
                        rounded-[6px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.08)]'
					>
						<MicIcon />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChatPage
