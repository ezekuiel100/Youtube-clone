import { FilmIcon, ForwardIcon, HomeIcon } from "@heroicons/react/24/outline";

const explorer = [
  "Trending",
  "Music",
  "Movies",
  "Lives",
  "Gaming",
  "News",
  "Sports",
  "Courses",
  "Fashion & Beauty",
  "Podcasts",
];

function Sidebar() {
  return (
    <aside className=" p-2 hidden sm:block">
      <div className="pb-2 border-b-2">
        <a
          href="#"
          className="p-2 text-sm lg:text-base hover:bg-gray-100 flex flex-col lg:flex-row items-center gap-2 rounded-md transition-all"
        >
          <HomeIcon className="h-6" />
          Home
        </a>
        <a
          href="#"
          className="p-2 text-sm lg:text-base flex flex-col lg:flex-row items-center gap-2 hover:bg-gray-100 rounded-md transition-all"
        >
          <FilmIcon className="h-6" />
          Shorts
        </a>
        <a
          href="#"
          className="p-2 text-sm lg:text-base flex flex-col lg:flex-row items-center gap-2 hover:bg-gray-100 rounded-md transition-all"
        >
          <ForwardIcon className="h-6" />
          Subscriptions
        </a>
      </div>

      <div className="border-b-2 py-2 hidden lg:block">
        <h3 className="font-bold">Explorer</h3>
        {explorer.map((el, i) => (
          <a
            href="#"
            key={i}
            className="block p-2 hover:bg-gray-100  rounded-md transition-all "
          >
            {el}
          </a>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
