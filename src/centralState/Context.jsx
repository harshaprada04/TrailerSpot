import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const Context = createContext({
  favorite: [],
  showHandler: () => {},
  listHandler: (myList) => {},
  removeListHandler: (listId) => {},
  isInList: (listId) => {},
  showSidebar: false,
  userData: {},
  setUserData: (userData) => {},
  resetData: () => {},
  getFavouriteList: () => {},
});

export function ContextProvider(props) {
  const [favorite, setFavorite] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getFavouriteList();
}, []);

  function showHandler() {
    setShowSidebar(!showSidebar);
  }

  async function removeListHandler(listId) {

    try {
       const loginToken = localStorage.getItem("accessToken");
      const res = await fetch(
        `https://trailer-spot.onrender.com/api/v1/users/favourites/${listId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
              token: loginToken || "",
          },
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        setFavorite(data.data.favouriteList);
        toast.success(data.message);
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to add to favourites");
    }
  }

  function isInList(listId) {
    return favorite.some((list) => list.id.toString() === listId.toString());
  }

  function resetData() {
    setFavorite([]);
    setShowSidebar(false);
    setUserData(null);
  }

  async function getFavouriteList() {
     const loginToken = localStorage.getItem("accessToken");
  try {
    const res = await fetch(
      `https://trailer-spot.onrender.com/api/v1/users/favouritesList`,
      {
        method: "GET",
        headers: {
          token: loginToken,
        },
      }
    );

    const data = await res.json();

    if (data.status === "success" && data.data.favourites) {
      setFavorite(data.data.favourites); 
    } else {
      toast.error(data.message || "Failed to load favourites");
    }
  } catch (error) {
    toast.error("Something went wrong while fetching favourites");
  }
}


 
  async function listHandler(myList) {
    const transformedData = {
  id: myList.id?.toString(),
  original_title: myList.original_title || myList.name,
  name: myList.name || myList.original_title,
  overview: myList.overview || "",
  vote_average: myList.vote_average?.toString() || "0",
  isOriginal: false, // default or set dynamically if available
  image: myList.image || "",
};

    try {
       const loginToken = localStorage.getItem("accessToken");
      const res = await fetch(
        `https://trailer-spot.onrender.com/api/v1/users/favourites`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
              token: loginToken || "",
          },
          body: JSON.stringify(transformedData),
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        getFavouriteList()
        toast.success(data.message || "Added to favourites!");
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to add to favourites");
    }
  }

  const context = {
    favorite: favorite,
    setFavorite: setFavorite,
    listHandler: listHandler,
    removeListHandler: removeListHandler,
    isInList: isInList,
    showHandler: showHandler,
    showSidebar: showSidebar,
    userData: userData,
    setUserData: setUserData,
    resetData: resetData,
    getFavouriteList:getFavouriteList
  };

  return (
    <Context.Provider value={context}>{props.children}</Context.Provider>
  );
}

export default Context;
