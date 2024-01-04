import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './layout/Navigation';
import { PageWrapper } from './layout/PageWrapper';
function App() {
  return (
    <>
      <div className="min-h-screen min-w-[375px] max-w-screen sm:max-w-[375px] sm:mx-auto flex flex-col bg-background overflow-clip">
        <PageWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </PageWrapper>
        <Navigation />
      </div>
    </>
  );
}

export default App;
