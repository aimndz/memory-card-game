import { useState } from "react";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import bgVideo from "./assets/video/bgVideo.mp4";
import BackgroundVideo from "./components/BackgroundVideo";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
    setCurrentPage("main");
  };

  const goBackToHomePage = () => {
    setCurrentPage("home");
  };

  return (
    <>
      {currentPage === "home" && <HomePage onLevelClick={handleLevelClick} />}
      {currentPage === "main" && (
        <MainPage goBackToHomePage={goBackToHomePage} level={selectedLevel} />
      )}
      <footer className="absolute z-30 bottom-0 left-0 w-full text-center py-4 text-white font-main footer-blur">
        © Amiel Ian Mendoza 2024
      </footer>

      <BackgroundVideo source={bgVideo} />
    </>
  );
}

export default App;
