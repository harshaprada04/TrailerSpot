import Card from "./Card";
import { useNavigate } from "react-router";
import React from "react";

function HomePageListItem(props) {
  const navigate = useNavigate();
  return (
    <div
      className={` w-80 cursor-pointer group transition-transform duration-300  ${
        props.index === 0
          ? "transform origin-left hover:scale-x-105"
          : "hover:scale-x-110"
      } hover:z-40`}
    >
      <div className="w-full h-full">
        <div
          className="w-full"
          onClick={() =>
            navigate("/video", {
              state: {
                id: props?.id,
                isOriginal: props.isOriginal,
              },
            })
          }
        >
          <img
            className="w-full h-60 object-cover object-center rounded-tr-lg rounded-tl-lg"
            src={`http://image.tmdb.org/t/p/original/${props.image}`}
            alt="poster"
          />
        </div>

        <div className="bg-gray-900 text-white rounded-br-lg  rounded-bl-lg  px-4 w-full">
          <Card
            id={props.id}
            original_title={props.original_title}
            name={props.name}
            overview={props.overview}
            vote_average={props.vote_average}
            isOriginal={props.isOriginal}
            image={props.image}
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(HomePageListItem);
