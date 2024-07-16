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

function SidebarExplorer() {
  return (
    <div className="py-2 ">
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
  );
}

export default SidebarExplorer;
