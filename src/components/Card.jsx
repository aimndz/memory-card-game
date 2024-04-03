import ReactCardFlip from "react-card-flip";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import Tilt from "react-parallax-tilt";

export default function Card({ image, name, onClick, isFlipped }) {
  return (
    <Tilt glareColor="#ffffff" glareEnable="true">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <BackCard onClick={onClick} image={image} name={name} />
        <FrontCard onClick={onClick} image={image} name={name} />
      </ReactCardFlip>
    </Tilt>
  );
}
