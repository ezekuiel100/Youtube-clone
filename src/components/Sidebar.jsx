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
    <aside className="w-52 p-2">
      <div className="pb-2 border-b-2">
        <a
          href="#"
          className="p-2 block hover:bg-gray-100  rounded-md transition-all"
        >
          Home
        </a>
        <a
          href="#"
          className="p-2 block hover:bg-gray-100 rounded-md transition-all"
        >
          Shorts
        </a>
        <a
          href="#"
          className="p-2 block hover:bg-gray-100 rounded-md transition-all"
        >
          Subscriptions
        </a>
      </div>

      <div className="border-b-2  py-2">
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
