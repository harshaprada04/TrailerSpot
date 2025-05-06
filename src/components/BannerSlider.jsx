import { useContext } from "react";
import Context from "../centralState/Context";
import { useNavigate } from "react-router";

function BannerSlider(props) {
  const { movieData } = props;
  const listContext = useContext(Context);

  const navigate = useNavigate();
  function clickHandler(e) {
    e.stopPropagation()
    const inList = listContext.isInList(movieData.id);
    if (inList) {
      listContext.removeListHandler(movieData.id);
    } else {
      listContext.listHandler({
        image: movieData.backdrop_path
          ? movieData.backdrop_path
          : movieData.poster_path,
        original_title: movieData.original_title,
        name: movieData.name,
        id: movieData.id,
        isOriginal: movieData?.first_air_date ? false : true,
        overview: movieData.overview,
        vote_average: movieData.vote_average,
      });
    }
  }

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function navigateToVideo(){
    e.stopPropagation()
      navigate("/video", {
        state: {
          id: movieData?.id,
          isOriginal: movieData?.first_air_date ? false : true,
        },
      })
  }

  return (
    <div className=" h-screen w-full rounded-5xl">
      <img
        src={`http://image.tmdb.org/t/p/original/${
          movieData.backdrop_path
            ? movieData.backdrop_path
            : movieData.poster_path
        }`}
        className="w-full h-full object-cover"
      />
      <div className="absolute hidden md:block bottom-4 left-10 right-10">
        <p className=" text-white text-3xl font-bold z-10 pb-2">
          {truncate(
            movieData?.name ? movieData?.name : movieData?.original_name,
            200
          )}
        </p>
        <p className=" text-white text-sm font-bold z-10 pb-2">
          {truncate(movieData?.overview, 500)}
        </p>
        <div className="flex">
          <div
            onClick={navigateToVideo}
            className="bg-white w-8 h-8 items-center flex justify-center rounded-full cursor-pointer hover:scale-120 transition-transform duration-300 ease-in-out"
          >
            <img src="../src/assets/play-video.png" className="w-6 h-6" />
          </div>
          <div
            onClick={(e) => clickHandler( e)}
            className="bg-white w-8 h-8 ml-4 items-center flex justify-center rounded-full cursor-pointer hover:scale-120 transition-transform duration-300 ease-in-out"
          >
            <img
              src={
                listContext.isInList(movieData.id)
                  ? "../src/assets/cross.png"
                  : "../src/assets/add.png"
              }
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSlider;
