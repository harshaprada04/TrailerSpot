import { Navigate, Outlet } from "react-router";
import NavBar from "./NavBar"; 

const ProtectedRoutes =  () => {
  const isLoggedIn =  localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) return <Navigate to="/login" />;

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;
