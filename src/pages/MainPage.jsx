import bgVideo from "../assets/video/bgVideo.mp4";
import logo from "../assets/image/rick-and-morty-logo.png";
import LevelButton from "../components/LevelButton";
import getData from "../api";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import Tilt from "react-parallax-tilt";
import GameOver from "../components/GameOver";

export default function MainPage({ level, goBackToHomePage }) {
  const [characters, setCharacters] = useState([]);
  const [isFlipped, setIsFlipped] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [result, setResult] = useState("");
  const [highScore, setHighScore] = useState(() => {
    const storedHighScore = localStorage.getItem("highScore");
    return storedHighScore ? parseInt(storedHighScore, 10) : 0;
  });

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
      localStorage.setItem("highScore", currentScore.toString());
    }
  }, [currentScore, highScore]);

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

  useEffect(() => {
    if (characters.length > 0 && currentScore === characters.length) {
      setResult("win");
      setIsGameOver(true);
    }
  }, [currentScore, characters.length]);

  const restartGame = () => {
    setIsFlipped([]);
    setSelectedCharacters([]);
    setCurrentScore(0);
    setIsGameOver(false);
    setResult("");
  };

  const handleClick = (key) => {
    if (selectedCharacters.includes(key)) {
      setResult("lose");
      setIsGameOver(true);
    } else {
      setSelectedCharacters((prevSelectedCharacters) => [
        ...prevSelectedCharacters,
        key,
      ]);
      setCurrentScore(currentScore + 1);
    }

    setIsFlipped(isFlipped.map(() => true));

    setTimeout(() => {
      setIsFlipped(isFlipped.map(() => false));
      shuffle();
    }, 1500);
  };

  const shuffle = () => {
    const shuffledCharacters = [...characters];

    for (let i = shuffledCharacters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCharacters[i], shuffledCharacters[j]] = [
        shuffledCharacters[j],
        shuffledCharacters[i],
      ];
    }

    setCharacters(shuffledCharacters);
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
        <div className="flex flex-col justify-center text-white font-bold font-main drop-shadow-customShadow">
          <p>
            Score: <span>{currentScore}</span>
          </p>
          <p>
            High Score: <span>{highScore}</span>
          </p>
        </div>
      </header>

      {isGameOver ? (
        <GameOver result={result} restartGame={restartGame} />
      ) : (
        <main className="flex justify-center items-center h-main m-5 flex-col gap-8">
          <p className="text-white font-main text-lg drop-shadow-customShadow">
            Avoid clicking the same card twice!!!
          </p>
          <section className="flex gap-5 justify-center flex-wrap">
            {characters.map((character, index) => (
              <Card
                key={character.id}
                image={character.image}
                name={character.name}
                onClick={() => {
                  handleClick(character.id);
                }}
                isFlipped={isFlipped[index]}
              />
            ))}
          </section>
        </main>
      )}
    </section>
  );
}
