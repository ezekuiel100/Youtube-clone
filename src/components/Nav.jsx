import { BellIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

function Nav() {
  return (
    <div>
      <nav className="flex justify-between p-4">
        <span className="text-2xl">Logo</span>
        <input
          type="text"
          placeholder="Buscar video"
          className="bg-gray-200 w-96 rounded-3xl p-2 px-4"
        />
        <div className="flex gap-8">
          <a href="#">
            <VideoCameraIcon className="h-10" />
          </a>
          <a href="#">
            <BellIcon className="h-10" />
          </a>
          <a href="#">
            <img
              src="http://www.github.com/ezekuiel100.png"
              className="h-10 rounded-full"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
