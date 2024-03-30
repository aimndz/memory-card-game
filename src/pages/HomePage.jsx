import bgVideo from "../assets/video/bgVideo.mp4";
import logo from "../assets/image/rick-and-morty-logo.png";
import LevelButton from "../components/LevelButton";

export default function HomePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <section className="absolute z-30 top-0 left-0 right-0 max-w-3xl mx-auto h-full flex flex-col justify-center items-center gap-10">
        <div className="text-center mx-4">
          <img src={logo} alt="logo" className="drop-shadow-customShadow" />
          <p className="font-home text-customMain text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-stroke drop-shadow-customShadow">
            Memory Game
          </p>
        </div>
        <ul className="flex flex-col items-center color-customMain gap-5 mt-10">
          <li>
            <LevelButton text="Easy" />
          </li>
          <li>
            <LevelButton text="Medium" />
          </li>
          <li>
            <LevelButton text="Hard" />
          </li>
        </ul>

        <footer className="absolute bottom-0 left-0 w-full text-center py-4 text-white">
          © Amiel Ian Mendoza 2024
        </footer>
      </section>

      <div className="absolute inset-0 bg-black opacity-45 z-20"></div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-full h-full object-cover object-top"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
}
