import { videos } from "../data/videos";
import formatDuration from "../utils/formatDuration";

function Main() {
  return (
    <div className="px-20 md:px-9 py-4 w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 ">
      {videos.map(({ thumbnail, duration, video, title }, i) => (
        <div key={i}>
          <div className="relative">
            <img src={thumbnail} className="object-cover" />
            <span className="bg-black px-1 text-white font-semibold absolute bottom-1 right-1">
              {formatDuration(duration)}
            </span>
          </div>
          <p className="text-lg font-semibold">{title}</p>
        </div>
      ))}
    </div>
  );
}

export default Main;
