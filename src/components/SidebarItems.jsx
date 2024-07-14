import { FilmIcon, ForwardIcon, HomeIcon } from "@heroicons/react/24/outline";

const sidebarContent = [
  { title: "Home", icon: <HomeIcon className="h-6" /> },
  { title: "Shorts", icon: <FilmIcon className="h-6" /> },
  { title: "Subscriptions", icon: <ForwardIcon className="h-6" /> },
];

function SidebarItems() {
  return (
    <>
      {sidebarContent.map(({ title, icon }, i) => (
        <a
          href="#"
          key={i}
          className="p-2 text-base hover:bg-gray-100 flex items-center gap-2 rounded-md transition-all"
        >
          {icon}
          {title}
        </a>
      ))}
    </>
  );
}

function SmallSidebarItems() {
  return (
    <>
      {sidebarContent.map(({ title, icon }, i) => (
        <a
          href="#"
          key={i}
          className="p-2 text-sm lg:text-base flex flex-col items-center gap-2 hover:bg-gray-100 rounded-md transition-all"
        >
          {icon}
          {title}
        </a>
      ))}
    </>
  );
}

export { SidebarItems, SmallSidebarItems };
