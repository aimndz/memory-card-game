import bgVideo from "../assets/video/bgVideo.mp4";
import logo from "../assets/image/rick-and-morty-logo.png";
import LevelButton from "../components/LevelButton";

export default function MainPage({ difficulty, goBackToHomePage }) {
  return (
    <section className="absolute z-30 top-0 left-0 right-0 max-w-7xl mx-auto h-full ">
      <header className="flex justify-between m-5">
        <div>
          <img
            src={logo}
            alt="logo"
            className="drop-shadow-customShadow max-w-52 cursor-pointer"
            onClick={goBackToHomePage}
          />
        </div>
        <div className="flex flex-col justify-center text-white font-bold font-main">
          <p>
            Score: <span>1</span>
          </p>
          <p>
            High Score: <span>1</span>{" "}
          </p>
        </div>
      </header>
      <main></main>
    </section>
  );
}
