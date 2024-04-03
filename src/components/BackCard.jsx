import backCardImage from "../assets/image/card-back.png";

export default function BackCard({ image, name, onClick }) {
  return (
    <section className="max-w-60 drop-shadow-customShadow cursor-pointer">
      <div className="rounded-lg overflow-hidden">
        <img src={backCardImage} alt="card image" onClick={onClick} />
      </div>
    </section>
  );
}
