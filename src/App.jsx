import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import SidebarContext from "./context/SidebarContext";

function App() {
  return (
    <SidebarContext>
      <div className="relative">
        <Nav />
        <div className="flex items-start relative">
          <Sidebar />
          <Main />
        </div>
      </div>
    </SidebarContext>
  );
}

export default App;
