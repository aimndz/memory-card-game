import logo from "../assets/image/rick-and-morty-logo.png";
import LevelButton from "../components/LevelButton";

export default function HomePage({ onLevelClick }) {
  return (
    <section className="absolute z-30 top-0 left-0 right-0 max-w-3xl mx-auto h-full flex flex-col justify-center items-center gap-10">
      <div className="text-center mx-4">
        <img src={logo} alt="logo" className="drop-shadow-customShadow" />
        <p className="font-home text-customMain text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-stroke drop-shadow-customShadow">
          Memory Game
        </p>
      </div>
      <ul className="flex flex-col items-center color-customMain gap-5 mt-10">
        <li>
          <LevelButton text="Easy" onClick={() => onLevelClick("easy")} />
        </li>
        <li>
          <LevelButton text="Medium" onClick={() => onLevelClick("medium")} />
        </li>
        <li>
          <LevelButton text="Hard" onClick={() => onLevelClick("hard")} />
        </li>
      </ul>
    </section>
  );
}
