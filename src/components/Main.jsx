import { videos } from "../data/videos";
import formatDuration from "../utils/formatDuration";

function Main() {
  return (
    <div className="px-20 md:px-9 py-4 w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 ">
      {videos.map(
        (
          { id, thumbnail, duration, channel, views, video, postedAt, title },
          i
        ) => (
          <div key={i}>
            <a href={`/watch?v=${id}`} className="bg-red-300">
              <div className="relative">
                <img src={thumbnail} className="object-cover mb-1" />
                <span className="bg-black px-1 text-white font-semibold absolute bottom-1 right-1">
                  {formatDuration(duration)}
                </span>
              </div>

              <div className="flex gap-2">
                <img
                  src="src/assets/profile.png"
                  alt=""
                  className="rounded-full h-9"
                />

                <div className="flex flex-col  leading-5">
                  <p className="text-lg font-semibold leading-5 mb-1">
                    {title}
                  </p>

                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    {channel}
                  </a>
                  <div className="flex gap-2 text-gray-400">
                    <p>{100} Views</p>
                    <p>{postedAt}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        )
      )}
    </div>
  );
}

export default Main;
