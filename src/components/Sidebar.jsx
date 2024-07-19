import PageHeader from "./PageLogo";
import { SidebarItems, SmallSidebarItems } from "./SidebarItems";
import SidebarExplorer from "./SidebarExplorer";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

function Sidebar() {
  const { isLargeScreen, isSmallScreen, toggleSidebar, close } =
    useContext(SidebarContext);

  return (
    <>
      <aside
        className={`lg:sticky lg:top-[74px] absolute top-0 w-56 pb-16 scrollbar-hidden p-2 bg-white overflow-y-auto ${
          isLargeScreen ? "lg:block" : "lg:hidden"
        } ${isSmallScreen ? "block fixed top-0 left-0 z-50 h-full" : "hidden"}`}
      >
        {isSmallScreen && <PageHeader toggleSidebar={toggleSidebar} />}

        <div className="pb-2 border-b-2">
          <SidebarItems />
        </div>

        <SidebarExplorer />
      </aside>

      {isSmallScreen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-20 "
          onClick={close}
        ></div>
      )}

      <aside
        className={`hidden sm:block sticky top-[74px] bg-white ${
          isLargeScreen ? "lg:hidden" : "lg:block"
        }`}
      >
        <SmallSidebarItems />
      </aside>
    </>
  );
}

export default Sidebar;
