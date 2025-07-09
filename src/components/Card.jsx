import Context from "../centralState/Context";
import React, { useContext } from "react";
import { useNavigate } from "react-router";

function Card(props) {
  const listContext = useContext(Context);
  const inList = listContext.isInList(props.id);
  const navigate = useNavigate();
  function clickHandler() {
    if (inList) {
      listContext.removeListHandler( props.id);
    } else {
      listContext.listHandler({
        image: props.image,
        original_title: props.original_title,
        name: props.name,
        id: props.id,
        isOriginal: props.isOriginal,
        overview: props.overview,
        vote_average: props.vote_average,
      });
    }
  }

  function truncate(str, n, isUppercase) {
    let movieName = str?.length > n ? str.substr(0, n - 1) + "..." : str;
    return isUppercase? movieName?.toUpperCase( ): movieName;
  }

  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <h2 className="text-base font-bold text-white">
          {truncate(props.name ? props.name : props.original_title, 15, true)}
        </h2>
        <h2 className="text-base font-bold text-white">
          ({Math.round(props.vote_average)})
        </h2>
      </div>
      <div className="flex">
        <div
          onClick={() =>
            navigate("/video", {
              state: {
                id: props?.id,
                isOriginal: props.isOriginal,
              },
            })
          }
          className="bg-white w-8 h-8 items-center flex justify-center rounded-full cursor-pointer hover:scale-120 transition-transform duration-300 ease-in-out"
        >
          <img src="/assets/play-video.png" className="w-6 h-6" />
        </div>
        <div
          onClick={() => clickHandler(props)}
          className="bg-white w-8 h-8 ml-4 items-center flex justify-center rounded-full cursor-pointer hover:scale-120 transition-transform duration-300 ease-in-out"
        >
          <img
            src={
              listContext.isInList(props.id)
                ? "/assets/cross.png"
                  : "/assets/add.png"
            }
            className="w-6 h-6"
          />
        </div>
      </div>
      <h3 className="text-sm font-bold text-white py-4">
        {truncate(
          props.overview
            ? props.overview
            : "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          70, false
        )}
      </h3>
    </div>
  );
}

export default React.memo(Card);
