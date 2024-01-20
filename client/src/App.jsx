import { Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import OnBoardingPage from './pages/OnBoardingPage'
import ProfilePage from './pages/ProfilePage'
import QuizPage from './pages/QuizPage'
import ChatPage from './pages/ChatPage'
import { RegistrationPage } from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'


function App() {
	return (
		<>
			<div className='min-h-screen min-w-[375px] max-w-screen sm:max-w-[375px] sm:mx-auto flex flex-col bg-background overflow-clip'>
				<Routes>
					<Route element={<Layout />}>
						<Route path='/' element={<HomePage />} />
						<Route path='/profile' element={<ProfilePage />} />
						<Route path='/quiz' element={<QuizPage />} />
						<Route path='/chat' element={<ChatPage />} />
					</Route>
					<Route
						path='/registration'
						element={<RegistrationPage />}
					/>
					<Route path='/login' element={<LoginPage />} />
					<Route path='/on-boarding' element={<OnBoardingPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</div>
		</>
	)
}

export default App
