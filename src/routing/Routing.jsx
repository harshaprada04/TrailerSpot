import { Routes, Route,  Navigate} from "react-router";
import SearchPage from "../components/SearchPage";
import VideoPlayer from "../components/VideoPlayer";
import HomePage from "../components/HomePage";
import React, { lazy, Suspense } from 'react';
import ShimmerCardLayout from "../components/ShimmerCardLayout";
import RegisterForm from "../components/RegistartionForm";
import NavBar from "./NavBar";
import ProtectedRoutes from "./ProtectedRoutes";
import LoginForm from "../components/LoginForm";

function Routing() {
  const MyFavourite = lazy(() => import("../components/MyList"));
  const MoviesList = lazy(() => import("../components/Movies"));
  const TvShowList = lazy(() => import("../components/Tvshow"));
  return (
    <Routes>
      <Route path="/register" element={<RegisterForm />}/>
      <Route path="/login" element={<LoginForm />}/>
       <Route element={<ProtectedRoutes/>}>
        <Route path="/" element={<Navigate to="/home" replace />} />

    <Route path="/home" element={<HomePage />} />
      <Route path="/tvshow" element={<Suspense fallback={<ShimmerCardLayout/>}> <TvShowList /></Suspense> }></Route>
      <Route path="/movies" element={<Suspense fallback={<ShimmerCardLayout/>}> <MoviesList /></Suspense> }></Route>
      <Route path="/mylist" element={<Suspense fallback={<ShimmerCardLayout/>}> <MyFavourite /></Suspense> }></Route>
      <Route path="/search" element={<SearchPage />}></Route>
      <Route path="/video" element={<VideoPlayer />}></Route>
       </Route>
    </Routes>
  );
}

export default Routing;
