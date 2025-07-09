import { Link, useLocation } from "react-router";
import { useEffect, useContext } from "react";
import SideBar from "../components/SideBar";
import Context from "../centralState/Context";

function NavBar() {
  const location = useLocation();
  const { showHandler, showSidebar, getFavouriteList } = useContext(Context);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") showHandler();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Top Navigation */}
      <div
        className={
          showSidebar
            ? "fixed w-full z-50 px-4 py-3"
            : "fixed flex items-center right-3 left-3 px-4 rounded-xl z-50 py-3 bg-gray-900/60 backdrop-blur-md"
        }
      >
        <div className="flex items-center gap-[5px]">
          {/* Always show menu button */}
          <button
            onClick={showHandler}
            className="text-white text-xl hover:text-red-500"
            aria-label="Menu"
          >
            ☰
          </button>

          {!showSidebar && (
            <>
              <h2 className="font-bold text-2xl italic text-red-600 cursor-pointer ml-4">
                TrailerSpot
              </h2>

              <ul className="flex items-center gap-[15px] ml-[70px]">
                <li>
                  <Link to="/home">
                    <p
                      className={`text-m px-4 py-1 rounded-sm hover:bg-white hover:text-black ${
                        location.pathname === "/home"
                          ? "bg-white text-black"
                          : "text-white"
                      }`}
                    >
                      Home
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tvshow"
                    className={`text-m px-4 py-1 rounded-sm hover:bg-white hover:text-black ${
                      location.pathname === "/tvshow"
                        ? "bg-white text-black"
                        : "text-white"
                    }`}
                  >
                    Tv Show
                  </Link>
                </li>
                <li>
                  <Link
                    to="/movies"
                    className={`text-m px-4 py-1 rounded-sm hover:bg-white hover:text-black ${
                      location.pathname === "/movies"
                        ? "bg-white text-black"
                        : "text-white"
                    }`}
                  >
                    Movies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mylist"
                    onClick={getFavouriteList}
                    className={`text-m px-4 py-1 rounded-sm hover:bg-white hover:text-black ${
                      location.pathname === "/mylist"
                        ? "bg-white text-black"
                        : "text-white"
                    }`}
                  >
                    My Lists
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search"
                    className={`text-m flex items-center justify-center px-4 py-1 rounded-sm hover:bg-white hover:text-black ${
                      location.pathname === "/search"
                        ? "bg-white text-black"
                        : "text-white"
                    }`}
                  >
                    <img
                      src="/assets/search.png"
                      alt="search"
                      className={`w-5 h-5 filter brightness-0 sepia hue-rotate-180 ${
                        location.pathname === "/search" ? "invert-0" : "invert"
                      }`}
                    />
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>

      {/* Sidebar Drawer */}
      {showSidebar && (
        <>
          <div className="fixed top-0 left-0 w-64 h-full bg-gray-900 text-white z-40 shadow-lg transition duration-300 overflow-y-auto">
            
            

            <SideBar />
          </div>
          
        </>
      )}
    </>
  );
}

export default NavBar;
