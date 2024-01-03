import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './layout/Navigation';
function App() {
  return (
    <>
      <div className="min-h-screen min-w-[375px] max-w-[375px] flex flex-col justify-center mx-auto px-4 py-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
      <Navigation />
    </>
  );
}

export default App;
