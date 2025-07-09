import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { useContext } from "react";
import Context from "../centralState/Context";

const SideBar = () => {
  
  const navigate = useNavigate();

   const { resetData, showHandler, userData, setUserData } = useContext(Context);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const loginToken = localStorage.getItem("accessToken");

        const response = await fetch(
          `https://trailer-spot.onrender.com/api/v1/users/userData`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              token: loginToken || "",
            },
          }
        );

        const result = await response.json();

        if (response.ok && result.status === "success") {
          setUserData(result.data.user);
        } else {
          console.error("Failed to fetch user data:", result.message);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (!userData) {
    fetchUserData();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    resetData()
    navigate("/login");
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6 shadow-lg flex flex-col overflow-y-auto">
       
      <div>
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-600 text-white text-3xl font-bold mb-2">
            { userData?.userName?.slice(0, 2)?.toUpperCase() || "NA"}
          </div>
          <p className="text-lg font-semibold">
            {userData?.userName || "Loading..."}
          </p>
          <p className="text-sm text-gray-400">{userData?.email}</p>
        </div>

        <ul onClick={showHandler}  className="space-y-4 mt-6">
          <li>
            <Link to="/home">
              <p className="hover:text-red-400 transition cursor-pointer">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/tvshow">
              <p className="hover:text-red-400 transition cursor-pointer">Tv Show</p>
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <p className="hover:text-red-400 transition cursor-pointer">Movies</p>
            </Link>
          </li>
          <li>
            <Link to="/mylist">
              <p className="hover:text-red-400 transition cursor-pointer">My Lists</p>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <p className="hover:text-red-400 transition cursor-pointer">Search</p>
            </Link>
          </li>
          <li className="cursor-pointer hover:text-red-400 transition">Profile</li>
          <li className="cursor-pointer hover:text-red-400 transition">Privacy Policy</li>
        </ul>
      </div>

      <button
        onClick={handleLogout}
        className="mt-auto text-left text-red-500 hover:text-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default SideBar;
