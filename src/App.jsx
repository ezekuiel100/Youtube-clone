import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import SidebarProvider from "./context/SidebarContext";

function App() {
  return (
    <SidebarProvider>
      <div className="relative">
        <Nav />
        <div className="flex items-start relative">
          <Sidebar />
          <Main />
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
