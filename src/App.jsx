import { useEffect, useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function toggleSidebar() {
    if (screenWidth < 1024) {
      setIsSmallScreen((value) => !value);
    } else {
      setIsLargeScreen((value) => !value);
    }
  }

  function close() {
    if (screenWidth < 1024) {
      setIsSmallScreen(false);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (screenWidth > 1024) {
        setIsSmallScreen(false);
      }

      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      <Nav toggleSidebar={toggleSidebar} />
      <div className="flex items-start relative">
        <Sidebar
          isLargeScreen={isLargeScreen}
          isSmallScreen={isSmallScreen}
          toggleSidebar={toggleSidebar}
          close={close}
        />
        <Main />
      </div>
    </div>
  );
}

export default App;
