import PageHeader from "./PageHeader";
import { SidebarItems, SmallSidebarItems } from "./SidebarItems";
import SidebarExplorer from "./SidebarExplorer";

function Sidebar({ isLargeScreen, isSmallScreen, toggleSidebar, close }) {
  const getAsideClass = () => {
    let baseClass = "scrollbar-hidden p-2 bg-white overflow-y-auto";

    if (isLargeScreen) {
      baseClass += " lg:block";
    } else {
      baseClass += " lg:hidden";
    }

    if (isSmallScreen) {
      baseClass += " block fixed top-0 left-0 z-50 h-full";
    } else {
      baseClass += " hidden";
    }

    return baseClass;
  };

  return (
    <>
      <aside className={getAsideClass()}>
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
