import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
