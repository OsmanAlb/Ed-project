import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
// import Typography from '@mui/material/Typography'
// import TextField from '@mui/material/TextField'
// import Paper from '@mui/material/Paper'
// import Button from '@mui/material/Button'
// import Avatar from '@mui/material/Avatar'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { EyeSlashIcon } from '../../components/ui/icons/EyeSlashIcon'
import { LogoIcon } from '../../components/ui/icons/LogoIcon'
import { useForm } from 'react-hook-form'

import styles from './Login.module.scss'
import {
	fetchRegister,
	fetchAuth,
	selectorIsAuth
} from '../../redux/slices/auth'

export const Registration = () => {
	const isAuth = useSelector(selectorIsAuth)
	const dispatch = useDispatch()
	const {
		register,
		handleSubmit,
		formState: { errors, isValid }
	} = useForm({
		defaultValues: {
			fullName: 'Mayuri',
			email: 'Mayu@gmail.com',
			password: '1234'
		},
		mode: 'onChange'
	})
  const spanEmailRef = useRef()
	const spanPasswordRef = useRef()
	const spanNumberRef = useRef()
	const [isShow, setIsShow] = useState(false)

	const onSubmit = async values => {
		const data = await dispatch(fetchRegister(values))

		if (!data.payload) {
			return alert('Register in not valid')
		}

		if ('token' in data.payload) {
			window.localStorage.setItem('token', data.payload.token)
		} else {
			alert('Invalid')
		}
	}

	if (isAuth) {
		return <Navigate to='/' />
	}

	return (
		//  <Paper classes={{ root: styles.root }}>
		//    <Typography classes={{ root: styles.title }} variant="h5">
		//      Создание аккаунта
		//    </Typography>
		//    <div className={styles.avatar}>
		//       <Avatar sx={{ width: 100, height: 100}}/>
		//    </div>
		//    <form onSubmit = {handleSubmit(onSubmit)}>
		//    <TextField
		//        className={styles.field}
		//        label="Full name"
		//        error={Boolean(errors.fullName?.message)}
		//        helperText={errors.fullName?.message}
		//        {...register('fullName', { required: "Write your name here"})}
		//        fullWidth
		//      />
		//      <TextField
		//        className={styles.field}
		//        label="E-Mail"
		//        type="email"
		//        error={Boolean(errors.email?.message)}
		//        helperText={errors.email?.message}
		//        {...register('email', { required: "Write your email"})}
		//        fullWidth
		//      />
		//      <TextField className={styles.field}
		//      label="Пароль"
		//      error={Boolean(errors.password?.message)}
		//      helperText={errors.password?.message}
		//        {...register('password', { required: "Write your password"})}
		//      fullWidth />
		//      <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
		//        Войти
		//      </Button>
		//    </form>
		//  </Paper>

		<div className='h-max min-w-[375px] max-w-screen sm:max-w-[375px] sm:mx-auto flex flex-col bg-background overflow-clip ]'>
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
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='block text-center bg-inherit bottom-0 h-full '>
					<div className='text-center shadow-[0px_-4px_50px_0px_rgba(0,0,0,0.09)] px-[16px] h-full pb-[20px] rounded-[40px_40px_0_0]'>
						<h2 className=' text-black pt-[57px] mb-[25px] font-inter text-[18px] tracking-wide font-medium text-start'>
							Register
						</h2>
						<div className='relative'>
							<label>
								<input
									{...register('email', {
										required: 'Email is required!'
									})}
									className='block w-full border-b border-[#9D9B9B] bg-inherit p-[8px] font-inter focus:outline-none mb-[10px]'
									type='email'
									onFocus={() => {
										spanEmailRef.current.style.top = '-18px'
										spanEmailRef.current.style.fontSize =
											'10px'
									}}
									onBlur={() => {
										const emailValue = watch('email')
										if (emailValue === '') {
											spanEmailRef.current.style.top =
												'6px'
											spanEmailRef.current.style.fontSize =
												'14px'
										}
									}}
								/>
								<span className='text-[red] mt-[10px]'>
									{errors?.email?.message}
								</span>
								<span
									ref={spanEmailRef}
									className='absolute top-[6px] left-[8px] font-medium transition-all ease-in-out  text-[14px] text-[#181818] '
								>
									Email
								</span>
							</label>
						</div>
						<div className='relative'>
							<label>
								<input
									{...register('password', {
										required: 'Password is required!',
										minLength: {
											value: 6,
											message:
												'Password must be at least 6 characters long!'
										}
									})}
									onFocus={() => {
										spanPasswordRef.current.style.top =
											'-18px'
										spanPasswordRef.current.style.fontSize =
											'10px'
									}}
									onBlur={() => {
										const passwordValue = watch('password')
										if (passwordValue === '') {
											spanPasswordRef.current.style.top =
												'6px'
											spanPasswordRef.current.style.fontSize =
												'14px'
										}
									}}
									className='block w-full border-b border-[#9D9B9B] bg-inherit p-[8px] font-inter mt-[36px] mb-[10px] focus:outline-none'
									type={isShow ? 'text' : 'password'}
								/>
								<span className='text-[red]'>
									{errors?.password?.message}
								</span>
								<span
									ref={spanPasswordRef}
									className='absolute top-[6px] left-[8px] font-medium transition-all ease-in-out  text-[14px] text-[#181818]'
								>
									Password
								</span>
							</label>
							<Button
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
									{...register('phone', {
										required: 'Phone is required!'
									})}
									onFocus={() => {
										spanNumberRef.current.style.top =
											'-18px'
										spanNumberRef.current.style.fontSize =
											'10px'
									}}
									onBlur={() => {
										const numberValue = watch('phone')
										if (numberValue === '') {
											spanNumberRef.current.style.top =
												'6px'
											spanNumberRef.current.style.fontSize =
												'14px'
										}
									}}
									className='block w-full border-b border-[#9D9B9B] bg-inherit p-[8px] font-inter mt-[36px] mb-[10px] focus:outline-none'
									type='tel'
								/>
								<span className='text-[red]'>
									{errors?.phone?.message}
								</span>
								<span
									ref={spanNumberRef}
									className='top-[6px] absolute left-[8px] font-medium transition-all ease-in-out  text-[14px] text-[#181818]'
								>
									Phone
								</span>
							</label>
						</div>
						<div className='text-start mt-[35px] mb-[30px]'>
							<span className='block mb-[8px] text-[14px]'>
								Register As a?
							</span>
							<div className='flex justify-normal'>
								<label className='mr-[40px] align-baseline flex items-center'>
									<input
										{...register('registerAs', {
											required: true
										})}
										value='student'
										type='radio'
										className='w-[18px] h-[18px] mr-[5px] border-10 border-red-600'
									/>
									<span className='text-[12px] font-medium'>
										Student
									</span>
								</label>
								<label className='flex items-center'>
									<input
										{...register('registerAs', {
											required: true
										})}
										value='teacher'
										type='radio'
										className='w-[18px] h-[18px] mr-[5px]'
									/>
									<span className='text-[12px] font-medium'>
										Teacher
									</span>
								</label>{' '}
							</div>
							<div className='text-[red]'>
								{errors.registerAs && (
									<span>
										Please choose one of the registration
										options
									</span>
								)}
							</div>
						</div>
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
			</form>
		</div>
	)
}
