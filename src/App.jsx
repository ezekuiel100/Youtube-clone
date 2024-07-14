import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import useResponsiveSidevar from "./hooks/useResponsiveSidevar";

function App() {
  const { isLargeScreen, isSmallScreen, toggleSidebar, close } =
    useResponsiveSidevar();

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
