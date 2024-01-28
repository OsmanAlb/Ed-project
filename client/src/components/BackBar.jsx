import { Link } from 'react-router-dom'
import { BackArrowIcon } from './ui/icons/BackArrowIcon'

const BackBar = ({ text }) => {
	
	return (
		<div
			className='h-[54px] flex items-center gap-[15px] bg-[#FDFDFD] 
                 mx-[-16px] px-[16px]
                 shadow-[0_1px_2px_0px_rgba(0,0,0,0.09)]'
		>
			<Link to='/courses'>
			<BackArrowIcon />
			</Link>
			<div className='text-[14px] leading-[24px] text-[#181818]'>
				{text}
			</div>
		</div>
	)
}

export default BackBar
