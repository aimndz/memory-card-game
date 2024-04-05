import ReactCardFlip from "react-card-flip";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import Tilt from "react-parallax-tilt";

export default function Card({ image, name, onClick, isFlipped }) {
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div>
        <Tilt
          glareColor="#ffffff"
          glareEnable="true"
          glarePosition="all"
          glareMaxOpacity="0.4"
          glareBorderRadius="7px"
        >
          <FrontCard onClick={onClick} image={image} name={name} />
        </Tilt>
      </div>
      <div>
        <Tilt
          glareColor="#ffffff"
          glareEnable="true"
          glarePosition="all"
          glareMaxOpacity="0.6"
          glareBorderRadius="7px"
        >
          <BackCard onClick={onClick} image={image} name={name} />
        </Tilt>
      </div>
    </ReactCardFlip>
  );
}
