const videos = [
  { thumbnail: "src/assets/gladiator.jpg", video: "", title: "Gladiator II" },
  {
    thumbnail: "src/assets/divertidamente.jpg",
    video: "",
    title: "Divertida Mente 2 | Trailer Oficial Dublado",
  },
  {
    thumbnail: "src/assets/umbrella.jpg",
    video: "",
    title: "The Umbrella Academy | Final Season",
  },
  {
    thumbnail: "src/assets/bandits.jpg",
    video: "",
    title: "Time Bandits — Official Trailer | Apple TV+",
  },
  { thumbnail: "src/assets/gladiator.jpg", video: "", title: "Gladiator II" },
  {
    thumbnail: "src/assets/divertidamente.jpg",
    video: "",
    title: "Divertida Mente 2 | Trailer Oficial Dublado",
  },
  {
    thumbnail: "src/assets/umbrella.jpg",
    video: "",
    title: "The Umbrella Academy | Final Season",
  },
  {
    thumbnail: "src/assets/bandits.jpg",
    video: "",
    title: "Time Bandits — Official Trailer | Apple TV+",
  },
  { thumbnail: "src/assets/gladiator.jpg", video: "", title: "Gladiator II" },
  {
    thumbnail: "src/assets/divertidamente.jpg",
    video: "",
    title: "Divertida Mente 2 | Trailer Oficial Dublado",
  },
  {
    thumbnail: "src/assets/umbrella.jpg",
    video: "",
    title: "The Umbrella Academy | Final Season",
  },
  {
    thumbnail: "src/assets/bandits.jpg",
    video: "",
    title: "Time Bandits — Official Trailer | Apple TV+",
  },
  { thumbnail: "src/assets/gladiator.jpg", video: "", title: "Gladiator II" },
  {
    thumbnail: "src/assets/divertidamente.jpg",
    video: "",
    title: "Divertida Mente 2 | Trailer Oficial Dublado",
  },
  {
    thumbnail: "src/assets/umbrella.jpg",
    video: "",
    title: "The Umbrella Academy | Final Season",
  },
  {
    thumbnail: "src/assets/bandits.jpg",
    video: "",
    title: "Time Bandits — Official Trailer | Apple TV+",
  },
  { thumbnail: "src/assets/gladiator.jpg", video: "", title: "Gladiator II" },
  {
    thumbnail: "src/assets/divertidamente.jpg",
    video: "",
    title: "Divertida Mente 2 | Trailer Oficial Dublado",
  },
  {
    thumbnail: "src/assets/umbrella.jpg",
    video: "",
    title: "The Umbrella Academy | Final Season",
  },
  {
    thumbnail: "src/assets/bandits.jpg",
    video: "",
    title: "Time Bandits — Official Trailer | Apple TV+",
  },
  { thumbnail: "src/assets/gladiator.jpg", video: "", title: "Gladiator II" },
  {
    thumbnail: "src/assets/divertidamente.jpg",
    video: "",
    title: "Divertida Mente 2 | Trailer Oficial Dublado",
  },
  {
    thumbnail: "src/assets/umbrella.jpg",
    video: "",
    title: "The Umbrella Academy | Final Season",
  },
  {
    thumbnail: "src/assets/bandits.jpg",
    video: "",
    title: "Time Bandits — Official Trailer | Apple TV+",
  },
  { thumbnail: "src/assets/gladiator.jpg", video: "", title: "Gladiator II" },
  {
    thumbnail: "src/assets/divertidamente.jpg",
    video: "",
    title: "Divertida Mente 2 | Trailer Oficial Dublado",
  },
  {
    thumbnail: "src/assets/umbrella.jpg",
    video: "",
    title: "The Umbrella Academy | Final Season",
  },
  {
    thumbnail: "src/assets/bandits.jpg",
    video: "",
    title: "Time Bandits — Official Trailer | Apple TV+",
  },
  { thumbnail: "src/assets/gladiator.jpg", video: "", title: "Gladiator II" },
  {
    thumbnail: "src/assets/divertidamente.jpg",
    video: "",
    title: "Divertida Mente 2 | Trailer Oficial Dublado",
  },
  {
    thumbnail: "src/assets/umbrella.jpg",
    video: "",
    title: "The Umbrella Academy | Final Season",
  },
  {
    thumbnail: "src/assets/bandits.jpg",
    video: "",
    title: "Time Bandits — Official Trailer | Apple TV+",
  },
  { thumbnail: "src/assets/gladiator.jpg", video: "", title: "Gladiator II" },
  {
    thumbnail: "src/assets/divertidamente.jpg",
    video: "",
    title: "Divertida Mente 2 | Trailer Oficial Dublado",
  },
  {
    thumbnail: "src/assets/umbrella.jpg",
    video: "",
    title: "The Umbrella Academy | Final Season",
  },
  {
    thumbnail: "src/assets/bandits.jpg",
    video: "",
    title: "Time Bandits — Official Trailer | Apple TV+",
  },
  { thumbnail: "src/assets/gladiator.jpg", video: "", title: "Gladiator II" },
  {
    thumbnail: "src/assets/divertidamente.jpg",
    video: "",
    title: "Divertida Mente 2 | Trailer Oficial Dublado",
  },
  {
    thumbnail: "src/assets/umbrella.jpg",
    video: "",
    title: "The Umbrella Academy | Final Season",
  },
  {
    thumbnail: "src/assets/bandits.jpg",
    video: "",
    title: "Time Bandits — Official Trailer | Apple TV+",
  },
  { thumbnail: "src/assets/gladiator.jpg", video: "", title: "Gladiator II" },
  {
    thumbnail: "src/assets/divertidamente.jpg",
    video: "",
    title: "Divertida Mente 2 | Trailer Oficial Dublado",
  },
  {
    thumbnail: "src/assets/umbrella.jpg",
    video: "",
    title: "The Umbrella Academy | Final Season",
  },
  {
    thumbnail: "src/assets/bandits.jpg",
    video: "",
    title: "Time Bandits — Official Trailer | Apple TV+",
  },
];

function Main() {
  return (
    <div className="px-20 md:px-9 py-4 w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 ">
      {videos.map(({ thumbnail, video, title }, i) => (
        <div key={i}>
          <img src={thumbnail} className="object-cover" />
          <p className="text-lg font-semibold">{title}</p>
        </div>
      ))}
    </div>
  );
}

export default Main;
