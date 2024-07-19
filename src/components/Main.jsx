import { videos } from "../data/videos";
import GridVideo from "./GridVideo";

function Main() {
  return (
    <div className="px-20 md:px-9 py-4 w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 ">
      {videos.map((video, i) => (
        <div key={i}>
          <GridVideo video={video} />
        </div>
      ))}
    </div>
  );
}

export default Main;
