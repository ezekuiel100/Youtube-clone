import { useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="relative">
      <Nav setToggle={setToggle} />
      <div className="flex items-start relative">
        <Sidebar toggle={toggle} setToggle={setToggle} />
        <Main />
      </div>
    </div>
  );
}

export default App;
