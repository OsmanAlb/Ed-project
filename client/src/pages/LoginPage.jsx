import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { EyeSlashIcon } from '../components/ui/icons/EyeSlashIcon'
import { LogoIcon } from '../components/ui/icons/LogoIcon'
import { useRef } from 'react'

const LoginPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isShow, setIsShow] = useState(false)

	const inputEmailRef = useRef()
	const spanEmailRef = useRef()
	const inputPasswordRef = useRef()
	const spanPasswordRef = useRef()

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

	const handleSubmit = e => {
		e.preventDefault()
		console.log('Form submitted with data:', {
			email,
			password
		})
	}

	return (
		<div className='h-max min-w-[375px] max-w-screen sm:max-w-[375px] sm:mx-auto flex flex-col bg-background overflow-clip ]'>
			<div className='h-[278px] pt-[62px]'>
				<div className='flex justify-center'>
					<LogoIcon />
					<h1 className='leading-none font-normal text-[24px] text-left ml-[17.62px] font-lilitaOne'>
						EDUCA <br /> APP
					</h1>
				</div>
				<h2 className='text-[24px] font-normal text-center text-#181818 mt-[72px] font-inter'>
					Welcome Back, <br /> Angela Christina
				</h2>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='block text-center bg-inherit bottom-0 h-full'>
					<div className='text-center shadow-[0px_-4px_50px_0px_rgba(0,0,0,0.09)] px-[16px] h-full pb-[20px] rounded-[40px_40px_0_0]'>
						<h2 className=' text-[#181818] pt-[57px] mb-[25px] font-inter text-[18px] tracking-wide font-medium text-start'>
							Login
						</h2>
						<div className='relative'>
							<label>
								<input
									required
									ref={inputEmailRef}
									onFocus={handleFocusEmail}
									onBlur={handleEmailBlur}
									className='block w-full border-b border-[#9D9B9B] bg-inherit p-[8px] font-inter placeholder:text-[14px] focus:outline-none'
									type='email'
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
								<span
									ref={spanEmailRef}
									className='absolute top-0 left-[8px] font-medium transition-all ease-in-out text-[14px] text-[#181818]'
								>
									Username/Email
								</span>
							</label>
						</div>
						<div>
							<div className='relative'>
								<label>
									<input
										required
										ref={inputPasswordRef}
										onFocus={handleFocusPassword}
										onBlur={handlePasswordBlur}
										value={password}
										onChange={e =>
											setPassword(e.target.value)
										}
										className='block w-full border-b border-[#9D9B9B] bg-inherit p-[8px] font-inter mt-[36px] mb-[10px] focus:outline-none placeholder:text-[14px]'
										type={isShow ? 'text' : 'password'}
									/>
									<span
										ref={spanPasswordRef}
										className='top-[0] absolute left-[8px] font-medium transition-all ease-in-out  text-[14px] text-[#181818]'
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
								<span className='block text-end mb-[33px] text-lightGray text-[12px] font-normal'>
									<a href='#'>Forgot password?</a>
								</span>
							</div>
							<div>
								<Button className='w-[285px]' type='submit'>
									Login
								</Button>
								<span className='block text-center mt-[25px] text-#181818 text-[12px] font-semibold'>
									Don’ have an account?{' '}
									<Link
										to='/registration'
										className='text-accent'
									>
										Register
									</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default LoginPage
