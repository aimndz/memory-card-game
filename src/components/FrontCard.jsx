import frontCardImage from "../assets/image/card-front.png";

export default function FrontCard({ image, name, onClick }) {
  return (
    <section
      className="max-w-60 relative rounded-md overflow-hidden drop-shadow-customShadow cursor-pointer"
      onClick={onClick}
    >
      <div>
        <div className="absolute inset-0 flex justify-center text-white ">
          <div className="absolute max-w-52 top-12 rounded-md overflow-hidden">
            <img src={image} alt="character image" />
          </div>
          <div className="flex items-center absolute bottom-4 font-main text-center h-14">
            <p>{name}</p>
          </div>
        </div>
        <img
          src={frontCardImage}
          alt="background image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
