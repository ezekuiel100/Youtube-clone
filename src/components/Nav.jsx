import { BellIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

function Nav() {
  return (
    <div>
      <nav className="flex justify-between p-4 ">
        <span className="text-2xl">Logo</span>
        <input
          type="text"
          placeholder="Buscar video"
          className=" w-96 rounded-3xl p-2 px-4 border-[1px] border-gray-300 outline-none "
        />
        <div className="flex gap-8">
          <a href="#">
            <VideoCameraIcon className="h-9" />
          </a>
          <a href="#">
            <BellIcon className="h-9" />
          </a>
          <a href="#">
            <img
              src="http://www.github.com/ezekuiel100.png"
              className="h-9 rounded-full"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
