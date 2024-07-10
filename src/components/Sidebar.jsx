import {
  Bars3Icon,
  FilmIcon,
  ForwardIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

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

function Sidebar({ toggle, setToggle }) {
  const [screen, setScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* {toggle && (
        <div className="h-full absolute top-0 bg-red-300 transition-all duration-700">
          <div className="flex gap-3 flex-shrink-0 p-4">
            <Bars3Icon
              className="h-10 hover:bg-gray-200 p-2 rounded-full cursor-pointer "
              onClick={(toggle) => setToggle(!toggle)}
            />
            <a href="/" className="">
              <img
                src="src/assets/logo.png"
                className="h-10 rounded-full "
              ></img>
            </a>
          </div>
          <LargeSidebar />
        </div>
      )} */}

      {screen > 1300 && <LargeSidebar />}
      {screen > 800 && screen < 1300 && <SmallSidebar />}
    </>
  );
}

function LargeSidebar() {
  return (
    <aside className="p-2 sticky top-[74px] bg-white ">
      <div className="pb-2 border-b-2">
        <a
          href="#"
          className="p-2 text-base hover:bg-gray-100 flex items-center gap-2 rounded-md transition-all"
        >
          <HomeIcon className="h-6" />
          Home
        </a>
        <a
          href="#"
          className="p-2 text-base flex flex-row items-center gap-2 hover:bg-gray-100 rounded-md transition-all"
        >
          <FilmIcon className="h-6" />
          Shorts
        </a>
        <a
          href="#"
          className="p-2 text-base flex flex-row items-center gap-2 hover:bg-gray-100 rounded-md transition-all"
        >
          <ForwardIcon className="h-6" />
          Subscriptions
        </a>
      </div>

      <div className="py-2">
        <h3 className="font-bold">Explorer</h3>
        {explorer.map((el, i) => (
          <a
            href="#"
            key={i}
            className="block p-2 hover:bg-gray-100 rounded-md transition-all "
          >
            {el}
          </a>
        ))}
      </div>
    </aside>
  );
}

function SmallSidebar() {
  return (
    <aside className="sticky top-[74px] bg-white ">
      <a
        href="#"
        className="p-2 text-sm hover:bg-gray-100 flex flex-col items-center gap-2 rounded-md transition-all"
      >
        <HomeIcon className="h-6" />
        Home
      </a>
      <a
        href="#"
        className="p-2 text-sm lg:text-base flex flex-col items-center gap-2 hover:bg-gray-100 rounded-md transition-all"
      >
        <FilmIcon className="h-6" />
        Shorts
      </a>
      <a
        href="#"
        className="p-2 text-sm lg:text-base flex flex-col items-center gap-2 hover:bg-gray-100 rounded-md transition-all"
      >
        <ForwardIcon className="h-6" />
        Subscriptions
      </a>
    </aside>
  );
}

export default Sidebar;
