import Context from "../centralState/Context";
import { useContext } from "react";
import NoData from "./NoData";
import HomePageListItem from "./HomePageListItem";

function MyList() {
  const listContext = useContext(Context);

  return (
    <div className="w-full h-full">
      {listContext.favorite?.length === 0 ? (
        <div className="h-screen">
        <NoData
          header="No items available"
          title="There’s nothing to display right now. Please add content."
        />
        </div>
      ) : (
        <div className="pt-20 h-screen w-full pl-5">
          <div className="flex items-center  overflow-x-auto no-scrollbar space-x-6">
            {listContext.favorite.map((data, index) => (
              <div key={data.id} className="flex-shrink-0">
                <HomePageListItem
                  image={data.image}
                  original_title={data.name ? data.name : data.original_title}
                  name={data.name}
                  id={data.id}
                  isOriginal={data.isOriginal}
                  overview={data.overview}
                  index={index}
                  vote_average={data.vote_average}
                />
              </div>
            ))}
          </div>
        </div>
      )}
       
    </div>
  );
}
export default MyList;
