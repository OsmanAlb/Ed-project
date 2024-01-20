const ChatCard = ({ variant, width, content, image, time }) => {
	const variants = {
		blue: {
			block: 'ml-auto bg-[#4C6ED7]',
			innerBlock: 'flex-row-reverse',
			topText: 'text-[#FDFDFD]',
			bottomText: 'text-[#EAEAEA]'
		},
		white: {
			block: 'bg-[#FDFDFD] shadow-[0_2px_30px_0px_rgba(0,0,0,0.08)]',
			topText: 'text-[#181818]',
			bottomText: 'text-[#4F4F4F]'
		}
	}

	return (
		<div
			style={{ width }}
			className={`flex flex-col gap-[5px]
                  p-[10px] text-[10px] 
                  leading-[20px] rounded-md ${variants[variant].block}`}
		>
			<div
				className={`flex items-start gap-[10px] ${variants[variant].innerBlock}`}
			>
				<img src={image} alt='' />
				<p className={`${variants[variant].topText}`}>{content}</p>
			</div>
			<div className='text-right'>
				<p className={`${variants[variant].bottomText}`}>{time}</p>
			</div>
		</div>
	)
}

export default ChatCard
