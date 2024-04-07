import youWin from "../assets/image/you-win.jpg";
import youLose from "../assets/image/you-lose.jpg";

export default function GameOver({ result, restartGame }) {
  return (
    <section className="bg-zinc-700 text-white text-center font-main absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-10 rounded-xl bg-gameOver">
      <h1 className="mb-5 text-xl">
        {result === "win" ? "You Win!" : "You Lose!"}
      </h1>
      <div className="w-96">
        <img className="w-full" src={result === "win" ? youWin : youLose} />
      </div>
      <button
        onClick={restartGame}
        className="transition delay-75 duration-300 ease-in-out font-main text-md sm:text-md md:text-l lg:text-xl xl:text-2xl
        bg-customMain px-4 sm:px-5 py-2 sm:py-3 rounded-md sm:rounded-lg lg:rounded-xl min-w-36 sm:min-w-48 md:min-w-60 w-full sm:w-auto
        text-customMain2 hover:bg-customMainLight mt-5 cursor-pointer"
      >
        Restart
      </button>
    </section>
  );
}
