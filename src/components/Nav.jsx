import {
  BellIcon,
  VideoCameraIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function Nav({ setToggle }) {
  return (
    <div>
      <nav className="flex justify-between p-4 ">
        <div className="flex gap-3">
          <Bars3Icon
            className="h-10 hover:bg-gray-200 p-2 rounded-full cursor-pointer flex-shrink-0"
            onClick={() => setToggle((toggle) => !toggle)}
          />
          <a href="/" className="flex-shrink-0">
            <img src="src/assets/logo.png" className="h-10 rounded-full "></img>
          </a>
        </div>

        <input
          type="text"
          placeholder="Buscar video"
          className="max-w-96 w-full rounded-3xl p-2 px-4 border-[1px] border-gray-300 focus:border-blue-500 outline-none "
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
    </div>
  );
}

export default Nav;
