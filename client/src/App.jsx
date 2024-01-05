import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import OnBoardingPage from './pages/OnBoardingPage'
import { Layout } from './layout/Layout'
import NotFoundPage from './pages/NotFoundPage'
function App() {
	return (
		<>
			<div className='min-h-screen min-w-[375px] max-w-screen sm:max-w-[375px] sm:mx-auto flex flex-col bg-background overflow-clip'>
				<Routes>
					<Route element={<Layout />}>
						<Route path='/' element={<HomePage />} />
						<Route path='/profile' element={<ProfilePage />} />
					</Route>
					<Route path='/on-boarding' element={<OnBoardingPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</div>
		</>
	)
}

export default App
