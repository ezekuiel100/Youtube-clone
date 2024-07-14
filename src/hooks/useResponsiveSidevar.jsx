import { useEffect, useState } from "react";

function useResponsiveSidevar() {
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

  return { isLargeScreen, isSmallScreen, close, toggleSidebar };
}

export default useResponsiveSidevar;
