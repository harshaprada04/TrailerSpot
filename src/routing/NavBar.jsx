import { Link, useLocation } from "react-router";

function NavBar() {
  const location = useLocation();
  return (
    <div className="fixed flex right-3 left-3 px-2 rounded-xl items-center z-50 py-3  bg-gray-900/60 backdrop-blur-md">
      <h2 className="font-bold text-2xl italic text-red-600 cursor-pointer">
        TrailerSpot
      </h2>
      <ul className="flex items-center ml-15">
        <li>
          <Link to="/">
            <p
              className={`text-m px-5 py-1 rounded-sm hover:bg-white hover:text-black ${
                location.pathname === "/" ? "bg-white text-black" : "text-white"
              }`}
            >
              Home
            </p>
          </Link>
        </li>
        <li>
          <Link
            to="/tvshow"
            className={`text-m ml-8  px-5 py-1 hover:bg-white hover:text-black rounded-sm 
            ${
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
            className={`text-m ml-8 px-5 py-1 hover:bg-white rounded-sm hover:text-black ${
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
            className={`text-m ml-8 px-5 py-1 hover:bg-white hover:text-black rounded-sm
            ${
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
            className={`text-m flex px-5 items-center justify-center py-1 ml-8 hover:bg-white hover:text-black rounded-sm hover:invert-0
${location.pathname === "/search" && "bg-white" }
            `}
          >
            <img
              src="../src/assets/search.png"
              className={`w-5 h-5 filter brightness-0 hover:invert-0 sepia hue-rotate-180   ${
                location.pathname === "/search" ? "invert-0" : "invert"
              }`}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
