import { Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import ChatPage from './pages/ChatPage'
import HomePage from './pages/HomePage'
import Courses from './pages/Courses'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import OnBoardingPage from './pages/OnBoardingPage'
import ProfilePage from './pages/ProfilePage'
import QuizPage from './pages/QuizPage'
import { RegistrationPage } from './pages/RegistrationPage'
import CreateCourses from './pages/CreateCourses'

function App() {
	return (
		<>
			<div className='min-h-screen min-w-[375px] min-[320px]:mx-auto min-[320px]:max-w-[320px] max-w-screen sm:max-w-[375px] flex flex-col bg-background overflow-clip'>
				<Routes>
					<Route element={<Layout />}>
						<Route path='/' element={<HomePage />} />
						<Route path='/profile' element={<ProfilePage />} />
						<Route path='/quiz' element={<QuizPage />} />
						<Route path='/create' element={<CreateCourses />} />
						<Route path='/chat' element={<ChatPage />} />
						<Route path='/courses' element={<Courses />} />
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
