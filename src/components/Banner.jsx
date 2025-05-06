import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BannerSlider from "./BannerSlider";
import { useNavigate } from "react-router";
import useBannerData from "../hooks/useBannerData";

function Banner(props) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  let movieData = useBannerData(props.fetechURL);

  let navigateToVideo = (item) =>
   
    navigate("/video", {
      state: {
        id: item?.id,
        isOriginal: item.first_air_date ? false : true,
      },
    }
   
  );

  useEffect(() => {
    movieData.then(setMovies);
  }, [props.fetechURL]);

  return (
    <div className="h-10/12 w-full">
      {movies?.length > 0 && (
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="h-full w-full rounded-xl"
          direction="horizontal"
        >
          {movies.map((item) => (
            <SwiperSlide
              onClick={() => navigateToVideo(item)}
              className="relative h-full w-full cursor-pointer"
              key={item.id + item.name}
            >
              <BannerSlider movieData={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default Banner;
