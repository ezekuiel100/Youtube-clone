import { useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <Nav setToggle={setToggle} />
      <div className="flex">
        {toggle && <Sidebar />}
        <Main />
      </div>
    </div>
  );
}

export default App;
