export default function LevelButton({ text }) {
  return (
    <button
      className="transition delay-75 duration-300 ease-in-out font-button text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
        bg-customMain px-4 sm:px-5 py-2 sm:py-3 rounded-md sm:rounded-lg lg:rounded-xl min-w-36 sm:min-w-48 md:min-w-60 w-full sm:w-auto
        text-customMain2 hover:bg-customMainLight"
    >
      {text}
    </button>
  );
}
