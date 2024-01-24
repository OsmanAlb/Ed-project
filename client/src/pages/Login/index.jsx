import React from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'

import styles from './Login.module.scss'
import { fetchAuth, selectorIsAuth } from '../../redux/slices/auth'

export const Login = () => {
	const isAuth = useSelector(selectorIsAuth)
	const dispatch = useDispatch()
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isValid }
	} = useForm({
		defaultValues: {
			email: 'test@gmail.com',
			password: '123456'
		},
		mode: 'onChange'
	})

	const onSubmit = async values => {
		const data = await dispatch(fetchAuth(values))

		if (!data.payload) {
			return alert('Please provide a payload')
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
		<Paper classes={{ root: styles.root }}>
			<Typography classes={{ root: styles.title }} variant='h5'>
				Вход в аккаунт
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					className={styles.field}
					label='E-Mail'
					type='email'
					error={Boolean(errors.email?.message)}
					helperText={errors.email?.message}
					{...register('email', { required: 'Write your email' })}
					fullWidth
				/>
				<TextField
					className={styles.field}
					label='Пароль'
					error={Boolean(errors.password?.message)}
					helperText={errors.password?.message}
					{...register('password', {
						required: 'Write your password'
					})}
					fullWidth
				/>
				<Button
					type='submit'
					size='large'
					variant='contained'
					fullWidth
				>
					Войти
				</Button>
			</form>
		</Paper>
	)
}
