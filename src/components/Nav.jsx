import { BellIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import PageHeader from "./PageHeader";

function Nav() {
  return (
    <nav className="flex justify-between gap-16 p-4 sticky top-0 bg-white z-10">
      <PageHeader />
      <input
        type="text"
        placeholder="Buscar video"
        className="hidden sm:inline max-w-96 w-full rounded-3xl p-2 px-4 border-[1px] border-gray-300 focus:border-blue-500 outline-none"
      />

      <div className="flex gap-8">
        <a href="#">
          <VideoCameraIcon className="h-8" />
        </a>
        <a href="#">
          <BellIcon className="h-8" />
        </a>
        <a href="#">
          <img
            src="http://www.github.com/ezekuiel100.png"
            className="h-8 rounded-full"
          />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
