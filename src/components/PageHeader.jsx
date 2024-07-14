import { Bars3Icon } from "@heroicons/react/24/outline";

function PageHeader({ toggleSidebar }) {
  return (
    <div className="flex gap-3 flex-shrink-0">
      <Bars3Icon
        className="h-10 hover:bg-gray-200 p-2 rounded-full cursor-pointer "
        onClick={toggleSidebar}
      />
      <a href="/" className="">
        <img src="src/assets/logo.png" className="h-10 rounded-full "></img>
      </a>
    </div>
  );
}

export default PageHeader;
