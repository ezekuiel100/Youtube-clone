import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import useResponsiveSidebar from "./hooks/useResponsiveSidebar";

function App() {
  const { isLargeScreen, isSmallScreen, toggleSidebar, close } =
    useResponsiveSidebar();

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
