import requests from "../utils/request";
import { useState, useRef } from "react";
import HomePageListItem from "./HomePageListItem";
import NoData from "./NoData";
import ShimmerCard from "./ShimmerCard";

function SearchPage() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const timer = useRef(null);
  const fetchResults = async (endPoint) => {
    let searchResponse = await fetch(endPoint);
    let searchParsedResponse = await searchResponse.json();
    setSearchResults(searchParsedResponse?.results);
    setLoading(false);
  };

  function changeTextHandler(e) {
    let currentValue = e.target.value;
    setInput(currentValue);
    setLoading(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      let endPoint = requests.serachEndpoint(currentValue?.trim());
      currentValue?.length > 0 && fetchResults(endPoint);
    }, 2000);
  }

  let clearInput = () => {
    setInput("");
    setLoading(false);
    setSearchResults([]);
  };

  return (
    <div className="pt-22 h-screen w-full pl-5">
      <div className="fixed left-5 right-5 flex items-center bg-gray-900/60 backdrop-blur-md">
        <input
          className="w-full pr-17 focus:border-transparent rounded-2xl border-2 py-2  border-white  text-white text-base font-medium px-4 placeholder:font-medium placeholder:text-white placeholder:text-base"
          type="text"
          placeholder="Search"
          value={input}
          onChange={changeTextHandler}
        ></input>
        <p
          className="absolute right-5  text-white text-base font-medium"
          onClick={clearInput}
        >
          Clear
        </p>
      </div>
      <div className="mt-10">
        {input?.trim()?.length == 0 ? (
          <></>
        ) : loading ? (
          <div className="w-full flex overflow-x-auto no-scrollbar space-x-6">
            {[...Array(5)].map((_, i) => (
              <ShimmerCard key={i} />
            ))}
          </div>
        ) : (
          <>
            {searchResults?.length == 0 ? (
              <div className="w-full mt-20">
                <NoData
                  header="No Results Found"
                  title="We couldn’t find any matches for your search. Please try different keywords."
                />
              </div>
            ) : (
              <>
                (
                <div className="flex overflow-x-auto no-scrollbar mt-5 space-x-6">
                  {searchResults?.map((data, index) => {
                    return (
                      <div key={data.id} className="flex-shrink-0">
                        <HomePageListItem
                          poster_path={data.poster_path}
                          backdrop_path={data.backdrop_path}
                          image={
                            data.backdrop_path
                              ? data.backdrop_path
                              : data.poster_path
                          }
                          original_title={
                            data.name ? data.name : data.original_title
                          }
                          name={data.name}
                          id={data.id}
                          isOriginal={data.first_air_date ? false : true}
                          overview={data.overview}
                          index={index}
                          vote_average={data.vote_average}
                        />
                      </div>
                    );
                  })}
                </div>
                )
              </>
            )}
          </>
        )}
      </div>
      <div className="h-20" />
    </div>
  );
}

export default SearchPage;
