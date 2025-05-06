import MovieShowLister from "./MovieShowLister";
import requests from "../utils/request";

function TvShow() {
  return (
    <div className="pt-15 h-screen w-full pl-5">
      <MovieShowLister
        title="Netflix Original"
        fetechURL={requests.popular_tvshows}
        isOriginal
      />
      <MovieShowLister title="Crime Drama" fetechURL={requests.crime_tvshows} />
      <MovieShowLister
        title="Popular Tv Shows"
        fetechURL={requests.popularity}
      />
      <MovieShowLister
        title="Recommended Tv Shows"
        fetechURL={requests.recomendation_tvshows}
      />
      <MovieShowLister
        title="Trending Tv Shows"
        fetechURL={requests.trending_tvshows}
      />

      <div className="h-20" />
    </div>
  );
}
export default TvShow;
