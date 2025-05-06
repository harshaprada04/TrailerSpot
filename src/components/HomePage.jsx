import MovieShowLister from "./MovieShowLister";
import requests from "../utils/request";
import Banner from "./Banner";

function HomePage() {
  return (
    <div className="pt-15 h-screen w-full pl-5">
      <Banner fetechURL={requests.netflix_original} />
      <MovieShowLister
        title="Netflix Original"
        fetechURL={requests.netflix_original}
      />
      <MovieShowLister title="Trending Now" fetechURL={requests.trending} />
      <MovieShowLister title="Top Rated" fetechURL={requests.toprated} />
      <MovieShowLister
        title="Adventure Movies"
        fetechURL={requests.adventure}
      />
      <MovieShowLister title="Comedy Movies" fetechURL={requests.comedy} />
      <MovieShowLister title="War Movies" fetechURL={requests.war} />
      <MovieShowLister title="Action Movies" fetechURL={requests.action} />
      <MovieShowLister title="Horror Movies" fetechURL={requests.horror} />
      <div className="h-20"/>
    </div>
  );
}
export default HomePage;
