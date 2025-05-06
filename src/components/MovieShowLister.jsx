import { useState, useEffect } from "react";
import HomePageListItem from "./HomePageListItem";
import ShimmerCard from "./ShimmerCard";
import useBannerData from "../hooks/useBannerData";

function MovieShowLister(props) {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  let movieData = useBannerData(props.fetechURL);
  useEffect(() => {
    let timer;
    setLoading(true);
    movieData.then(setMovieList);
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [props.fetechURL]);

  return (
    <>
      {loading ? (
        <div className="w-full flex overflow-x-auto no-scrollbar space-x-6">
          {" "}
          (
          {[...Array(5)].map((_, i) => (
            <ShimmerCard key={i} />
          ))}
          )
        </div>
      ) : (
        <div className="w-full mt-5">
          <p className="text-xl text-red-500 font-bold mb-5">{props.title}</p>
          <div className="flex overflow-x-auto no-scrollbar space-x-6">
            {movieList.length > 0 &&
              movieList.map((data, index) => (
                <div key={data.id} className="flex-shrink-0">
                  <HomePageListItem
                    poster_path={data.poster_path}
                    backdrop_path={data.backdrop_path}
                    image={
                      data.backdrop_path ? data.backdrop_path : data.poster_path
                    }
                    original_title={data.name ? data.name : data.original_title}
                    name={data.name}
                    id={data.id}
                    isOriginal={data.first_air_date ? false : true}
                    overview={data.overview}
                    index={index}
                    vote_average={data.vote_average}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default MovieShowLister;
