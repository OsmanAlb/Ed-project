import ProfilePage from './pages/ProfilePage'
import Container from "@mui/material/Container";
import HomePage from './pages/HomePage'
import {Login} from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import OnBoardingPage from './pages/OnBoardingPage'
import { Layout } from './layout/Layout'
import NotFoundPage from './pages/NotFoundPage'
import { Header } from './components/Header'

function App() {
	return (
		<>
		  <Header/>
			<div className='min-h-screen min-w-[375px] max-w-screen sm:max-w-[375px] sm:mx-auto flex flex-col bg-background overflow-clip'>
				<Container maxWidth="lg">
					<Routes>
						<Route element={<Layout />}>
							<Route path='/' element={<HomePage />} />
							<Route path='/profile' element={<ProfilePage />} />
						</Route>
						<Route path='/on-boarding' element={<OnBoardingPage />} />
						<Route path='/Login' element={<Login />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</Container>
			</div>
		</>
	)
}

export default App
