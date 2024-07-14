import { videos } from "../data/videos";

function Main() {
  return (
    <div className="px-20 md:px-9 py-4 w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 ">
      {videos.map(({ thumbnail, video, title }, i) => (
        <div key={i}>
          <img src={thumbnail} className="object-cover" />
          <p className="text-lg font-semibold">{title}</p>
        </div>
      ))}
    </div>
  );
}

export default Main;
