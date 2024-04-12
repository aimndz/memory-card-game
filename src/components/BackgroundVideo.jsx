export default function BackgroundVideo({ source }) {
  return (
    <div className="fixed inset-0 z-10">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-45 z-20"></div>
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src={source} type="video/mp4" />
      </video>
    </div>
  );
}
