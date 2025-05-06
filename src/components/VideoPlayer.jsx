import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import ShimmerVideoPlayer from "./ShimmerVideoPlayer";
import NoData from "./NoData";

function VideoPlayer() {
  const [keyList, setKeyList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const { id, isOriginal } = location.state;
  useEffect(() => {
    let timer;
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/${
        isOriginal ? "movie" : "tv"
      }/${id}/videos?api_key=8df5aee02940e0a72a9c36ff18f0a5c2`
    )
      .then((res) =>
        res.json().then((data) => {
          if (data.results?.length > 0) {
            setKeyList(data.results);
            setError(false);
          } else {
            setError(true);
          }
        })
      )
      .finally(
        timer=setTimeout(() => {
          setLoading(false);
        }, 2000)
      );
    return () => {
      clearTimeout(timer);
      setError(false);
    };
  }, [id]);
  return (
    <div className="fixed inset-0 z-50 overflow-hidden w-full h-full bg-black flex items-center justify-center">
      {loading ? (
        <ShimmerVideoPlayer />
      ) : keyList?.length > 0 && !error ? (
        <iframe
          className="w-full h-full block"
          src={`https://www.youtube.com/embed/${keyList[0]?.key}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          {
            <NoData
              header={"Oops! No video found"}
              title={
                "We couldn't find any content to display right now. Please try again later."
              }
            />
          }
        </>
      )}
    </div>
  );
}

export default VideoPlayer;
