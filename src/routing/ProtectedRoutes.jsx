import { Navigate, Outlet } from "react-router";
import NavBar from "./NavBar"; 

const ProtectedRoutes =  () => {
//   const isRegistered = localStorage.getItem("isRegistered") === "true";
  const isLoggedIn =  localStorage.getItem("isLoggedIn") === "true";

//   if (!isRegistered) return <Navigate to="/register" />;
  if (!isLoggedIn) return <Navigate to="/login" />;

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;
