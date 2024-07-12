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

function Sidebar({ isLargeScreen, isSmallScreen }) {
  return (
    <>
      <aside
        className={`p-2 bg-white ${isLargeScreen ? "lg:block" : "lg:hidden"} ${
          isSmallScreen ? "block absolute top-0 left-0 z-50 h-full" : "hidden"
        }   `}
      >
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

      <aside
        className={`hidden sm:block sticky top-[74px] bg-white ${
          isLargeScreen ? "lg:hidden" : "lg:block"
        }`}
      >
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
    </>
  );
}

export default Sidebar;
