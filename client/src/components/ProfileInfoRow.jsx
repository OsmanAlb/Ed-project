import { useState } from 'react'
import { Button } from './ui/Button'
import { ChevronRight } from './ui/icons/ChevronRight'
import { EyeSlashIcon } from './ui/icons/EyeSlashIcon'
import { classNames } from '../utils/classNames'

export const ProfileInfoRow = ({
	icon,
	name,
	type = 'text',
	value,
	safe = false,
	link
}) => {
	const [isEditing, setIsEditing] = useState(false)
	const [inputValue, setInputValue] = useState(value)
	const [isShow, setIsShow] = useState(false)

	const onSubmit = e => {
		e.preventDefault()
		setIsEditing(prev => !prev)
		setIsShow(false)
	}
	return (
		<form onSubmit={onSubmit} className='flex gap-[10px] w-full mb-[10px]'>
			<div className='w-6 h-6 p-1 bg-white rounded-md shadow-md'>
				{icon}
			</div>
			<div className='flex flex-col gap-[5px] flex-1'>
				<label className='text-[12px] leading-[22px]' htmlFor={name}>
					{name}
				</label>
				{isEditing && (
					<div className='flex w-[202px] px-[10px] py-[5px] rounded-[4px] text-[10px] leading-[20px] bg-[#F2F2F2] border border-[#E0E0E0] text-secondary'>
						<input
							className='bg-inherit outline-none border-none flex-1'
							id={name}
							value={inputValue}
							onChange={e => setInputValue(e.target.value)}
							type={isShow ? 'text' : type}
						/>
						<Button
							className={classNames(
								type !== 'password' ? 'hidden' : '',
								isShow ? 'brightness-50' : ''
							)}
							type='button'
							onClick={() => setIsShow(prev => !prev)}
							variant='ghost-secondary'
							size='small'
						>
							<EyeSlashIcon />
						</Button>
					</div>
				)}

				{!isEditing && (
					<div className='text-[10px] leading-[20px] text-secondary'>
						{safe ? `Tap to Change ${name}` : inputValue}
					</div>
				)}
			</div>
			{!link && (
				<Button
					variant={isEditing ? 'ghost-primary' : 'ghost-secondary'}
					size='small'
				>
					{isEditing ? 'Save' : 'Edit'}
				</Button>
			)}
			{link && (
				<Button type='button' variant='ghost-secondary' size='small'>
					<ChevronRight />
				</Button>
			)}
		</form>
	)
}
