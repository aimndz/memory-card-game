export default function BackgroundVideo({ source }) {
  return (
    <>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-45 z-20"></div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-full h-full object-cover object-top"
      >
        <source src={source} type="video/mp4" />
      </video>
    </>
  );
}
