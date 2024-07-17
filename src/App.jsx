import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import SidebarProvider from "./context/SidebarContext";

function App() {
  return (
    <SidebarProvider>
      <Nav />
      <div className="flex items-start ">
        <Sidebar />
        <Main />
      </div>
    </SidebarProvider>
  );
}

export default App;
