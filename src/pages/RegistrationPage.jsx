/**

страница RegistrationPage так же с готовыми инпутами, с
такими же анмашками и функционалом, готовый роутинг с
RegistrationPage на LoginPage, не сделал onSubmit как и 
на LoginPage так-как пока что нет апи.

блоки кода которые нужно будет пофиксить тоже выделил, а также
возникла проблема с input radio, не смог их нормально отцентровать
и задать цвет непосредственно radio как на дизайне, 
сам пофиксить скорее всего не смогу, либо поттрачу много 
времени, нужна будет помощь.

с точки зрения компактности кода наложал, думаю будет лучше
позже разобрать на компоненты, решил оставить так, как раз
из-за того что не смог нормально стилизовать тот самый
блок кода.

след. в App.jsx

 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { EyeSlashIcon } from '../components/ui/icons/EyeSlashIcon'
import { LogoIcon } from '../components/ui/icons/LogoIcon'
import { useRef } from 'react'

const RegistrationPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [number, setNumber] = useState('')
	const [isShow, setIsShow] = useState(false)

	const inputEmailRef = useRef()
	const spanEmailRef = useRef()
	const inputPasswordRef = useRef()
	const spanPasswordRef = useRef()
	const inputNumberRef = useRef()
	const spanNumberRef = useRef()

	const handleFocusEmail = () => {
		spanEmailRef.current.style.top = '-18px'
		spanEmailRef.current.style.fontSize = '10px'
	}
	const handleEmailBlur = () => {
		if (inputEmailRef.current.value === '') {
			spanEmailRef.current.style.top = '0'
			spanEmailRef.current.style.fontSize = '14px'
		}
	}
	const handleFocusPassword = () => {
		spanPasswordRef.current.style.top = '-18px'
		spanPasswordRef.current.style.fontSize = '10px'
	}
	const handlePasswordBlur = () => {
		if (inputPasswordRef.current.value === '') {
			spanPasswordRef.current.style.top = '0'
			spanPasswordRef.current.style.fontSize = '14px'
		}
	}
	const handleFocusNumber = () => {
		spanNumberRef.current.style.top = '-18px'
		spanNumberRef.current.style.fontSize = '10px'
	}
	const handleNumberBlur = () => {
		if (inputNumberRef.current.value === '') {
			spanNumberRef.current.style.top = '0'
			spanNumberRef.current.style.fontSize = '14px'
		}
	}

	return (
		<div className='h-max min-w-[375px] max-w-screen sm:max-w-[375px] sm:mx-auto flex flex-col bg-background overflow-clip ]'>
			<form>
				<div className='h-[278px] pt-[62px]'>
					<div className='flex justify-center'>
						<LogoIcon />
						<h1 className='leading-none font-normal text-[24px] text-left ml-[17.62px] font-lilitaOne'>
							EDUCA <br /> APP
						</h1>
					</div>
					<h2 className='text-[24px] font-medium text-center text-[#181818] mt-[72px] font-inter'>
						Hi, Let’s Make a <br />
						Journey with Us
					</h2>
				</div>
				{/*  */}
				{/*  */}
				{/*  */}
				{/* FIXME: */}
				<div className='block text-center bg-inherit bottom-0 h-full '>
					<div className='text-center shadow-[0px_-4px_50px_0px_rgba(0,0,0,0.09)] px-[16px] h-full pb-[20px] rounded-[40px_40px_0_0]'>
						<h2 className=' text-black pt-[57px] mb-[25px] font-inter text-[18px] tracking-wide font-medium text-start'>
							Register
						</h2>
						<div className='relative'>
							<label>
								<input
									ref={inputEmailRef}
									onFocus={handleFocusEmail}
									onBlur={handleEmailBlur}
									className='block w-full border-b border-[#9D9B9B] bg-inherit p-[8px] font-inter focus:outline-none'
									type='email'
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
								<span
									ref={spanEmailRef}
									className='absolute top-[0] left-[8px] font-normal transition-all ease-in-out  text-[14px] text-[#181818] '
								>
									Email
								</span>
							</label>
						</div>
						<div className='relative'>
							<label>
								<input
									ref={inputPasswordRef}
									onFocus={handleFocusPassword}
									onBlur={handlePasswordBlur}
									value={password}
									onChange={e => setPassword(e.target.value)}
									className='block w-full border-b border-[#9D9B9B] bg-inherit p-[8px] font-inter mt-[36px] mb-[10px] focus:outline-none'
									type={isShow ? 'text' : 'password'}
								/>
								<span
									ref={spanPasswordRef}
									className='absolute top-[0] left-[8px] font-normal transition-all ease-in-out  text-[14px] text-[#181818]'
								>
									Password
								</span>
							</label>
							<Button
								ref={inputPasswordRef}
								onFocus={() => {
									inputPasswordRef.current.value === '' &&
										handleFocusPassword
								}}
								onBlur={handlePasswordBlur}
								className='inline absolute top-[25%] right-[8px]'
								type='button'
								onClick={() => setIsShow(prev => !prev)}
								variant='ghost-secondary'
								size='small'
							>
								<EyeSlashIcon />
							</Button>
						</div>
						<div className='relative'>
							<label>
								<input
									ref={inputNumberRef}
									onFocus={handleFocusNumber}
									onBlur={handleNumberBlur}
									value={number}
									onChange={e => setNumber(e.target.value)}
									className='block w-full border-b border-[#9D9B9B] bg-inherit p-[8px] font-inter mt-[36px] mb-[10px] focus:outline-none'
									type='tel'
								/>
								<span
									ref={spanNumberRef}
									className='top-[0] absolute left-[8px] font-normal transition-all ease-in-out  text-[14px] text-[#181818]'
								>
									Phone
								</span>
							</label>
						</div>
						{/*  */}
						{/*  */}
						{/*  */}
						{/* FIXME: */}
						<div className='text-start mt-[35px] mb-[30px]'>
							<span className='block mb-[8px] text-[14px]'>
								Register As a?
							</span>
							<div className='flex justify-normal'>
								<label className='mr-[40px] align-baseline flex items-center'>
									<input
										type='radio'
										name='registerAs'
										className='w-[18px] h-[18px] mr-[5px] border-10 border-red-600'
									/>
									<span className='text-[12px] font-normal'>
										Student
									</span>
								</label>
								<label className='flex items-center'>
									<input
										type='radio'
										name='registerAs'
										className='w-[18px] h-[18px] mr-[5px]'
									/>
									<span className='text-[12px] font-normal'>
										Teacher
									</span>
								</label>{' '}
							</div>
						</div>
						{/*  */}
						{/*  */}
						{/*  */}
						{/*  */}
						<Button className='w-[285px]'>Register</Button>
						<div className='mt-[25px]'>
							<span className='text-[12px] font-semibold'>
								Have an account?{' '}
								<Link to='/login' className='text-accent'>
									Login
								</Link>
							</span>
						</div>
					</div>
				</div>
				{/*  */}
				{/*  */}
				{/*  */}
				{/*  */}
			</form>
		</div>
	)
}

export default RegistrationPage
