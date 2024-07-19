import formatDuration from "../utils/formatDuration";
import { useEffect, useRef, useState } from "react";
import { formatTimeAgo } from "../utils/formatTimeAgo";

function GridVideo({ video }) {
  const [isVidePlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const { id, thumbnail, duration, views, channel, videoUrl, postedAt, title } =
    video;

  const VIEWS_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: "compact",
  });

  useEffect(() => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  }, [isVidePlaying]);

  return (
    <>
      <a
        href={`/watch?v=${id}`}
        className="bg-red-300 relative"
        onMouseEnter={() => setIsVideoPlaying(true)}
        onMouseLeave={() => setIsVideoPlaying(false)}
      >
        <div className="relative">
          <img src={thumbnail} className="object-cover mb-2" />
          <span className="bg-black px-1 text-white font-semibold absolute bottom-1 right-1">
            {formatDuration(duration)}
          </span>

          <video
            muted
            playsInline
            ref={videoRef}
            src={`${videoUrl}`}
            className={`absolute inset-0  ${
              isVidePlaying ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </a>
      <div className="flex gap-2">
        <a href="#">
          <img
            src="src/assets/profile.png"
            alt=""
            className="rounded-full h-9"
          />
        </a>

        <div className="flex flex-col  leading-5">
          <a
            href={`/watch?v=${id}`}
            className="text-lg font-semibold leading-5 mb-1"
          >
            {title}
          </a>

          <a href="#" className="text-gray-400 hover:text-gray-500">
            {channel}
          </a>

          <div className="flex gap-2 text-gray-400">
            <p>{VIEWS_FORMATTER.format(views)} Views •</p>
            <p>{formatTimeAgo(postedAt)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridVideo;
