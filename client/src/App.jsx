import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    // min-h-screen
    <div className="wrapper min-w-[375px] ">
      <div className="wrapper__inner">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profilePage" element={<ProfilePage />} />
        </Routes>
      </div>
      <Nav />
    </div>
  );
}

export default App;
