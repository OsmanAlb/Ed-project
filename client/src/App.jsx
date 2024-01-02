import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <div className="min-h-screen min-w-[375px] flex justify-center">
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/profilePage" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
