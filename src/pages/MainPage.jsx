import bgVideo from "../assets/video/bgVideo.mp4";
import logo from "../assets/image/rick-and-morty-logo.png";
import LevelButton from "../components/LevelButton";
import getData from "../api";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import Tilt from "react-parallax-tilt";

export default function MainPage({ level, goBackToHomePage }) {
  const [characters, setCharacters] = useState([]);
  const [isFlipped, setIsFlipped] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let page = 1;

      const levelToQuantity = {
        easy: 4,
        medium: 6,
        hard: 8,
      };

      const quantity = levelToQuantity[level];
      const data = await getData(page, quantity);

      setCharacters(data.results);
      setIsFlipped(new Array(data.results.length).fill(false));
    };

    fetchData();
  }, [level]);

  const handleClick = () => {
    setIsFlipped(isFlipped.map(() => true));

    const timeoutId = setTimeout(() => {
      setIsFlipped(isFlipped.map(() => false));
    }, 1000);

    return () => clearTimeout(timeoutId);
  };

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
            High Score: <span>1</span>
          </p>
        </div>
      </header>
      <main className="flex justify-center items-center h-main m-5">
        <section className="flex gap-5 justify-center flex-wrap">
          {characters.map((character, index) => (
            <Card
              key={character.id}
              image={character.image}
              name={character.name}
              onClick={() => {
                handleClick();
              }}
              isFlipped={isFlipped[index]}
            />
          ))}
        </section>
      </main>
    </section>
  );
}
