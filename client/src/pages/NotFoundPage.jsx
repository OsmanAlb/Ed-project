import React from 'react'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center text-accent text-center p-4'>
			<h1 className='font-bold text-7xl'>404</h1>
			<div class='font-bold text-4xl mt-10'>This page does not exist</div>
			<div class='text-secondary text-sm md:text-xl m-8'>
				The page you are looking for could not be found.
			</div>
			<Link to='/'>
				<Button>Back to home</Button>
			</Link>
		</div>
	)
}

export default NotFoundPage
