import { Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import Courses from './pages/Courses'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import OnBoardingPage from './pages/OnBoardingPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <>
      <div className='min-h-screen min-w-[375px] max-w-screen sm:max-w-[375px] sm:mx-auto flex flex-col bg-background overflow-clip'>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/courses' element={<Courses />} />
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
