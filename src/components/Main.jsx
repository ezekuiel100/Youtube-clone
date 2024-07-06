const videos = [
  "src/assets/1.mp4",
  "src/assets/2.mp4",
  "src/assets/3.mp4",
  "src/assets/4.mp4",
  "src/assets/1.mp4",
  "src/assets/2.mp4",
  "src/assets/3.mp4",
  "src/assets/4.mp4",
  "src/assets/1.mp4",
  "src/assets/2.mp4",
  "src/assets/3.mp4",
  "src/assets/4.mp4",
  "src/assets/1.mp4",
  "src/assets/2.mp4",
  "src/assets/3.mp4",
  "src/assets/4.mp4",
  "src/assets/1.mp4",
  "src/assets/2.mp4",
  "src/assets/3.mp4",
  "src/assets/4.mp4",
];

function Main() {
  return (
    <div className="px-20 md:px-9 py-4 w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 ">
      {videos.map((video, i) => (
        <video className="min-w-16" key={i}>
          <source src={video} type="video/mp4"></source>
        </video>
      ))}
    </div>
  );
}

export default Main;
