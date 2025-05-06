import { createContext } from "react";
import { useState } from "react";

const Context = createContext({
  favorite: [],
  listSize:"",
   listHandler: (myList) => {},
   removeListHandler: (listId) => {},
   isInList: (listId) => {},
});

export function ContextProvider(props) {
  const [favorite, setFavorite] = useState([]);
  function listHandler(myList) {
    setFavorite((prevfavorite) => {
      return prevfavorite.concat(myList);
    });
  }
  function removeListHandler(listId) {
    setFavorite((prevfavorite) => {
      return prevfavorite.filter((list) => listId !== list.id);
    });
  }
  function isInList(listId) {
    return favorite.some((list) =>
      list.id === listId);
  }
  const context = {
    favorite: favorite,
    setFavorite: setFavorite,
    listHandler: listHandler,
    removeListHandler: removeListHandler,
    isInList:isInList,
    listSize:favorite.length
  };
  return (
    <div>
      <Context.Provider value={context}>{props.children}</Context.Provider>
    </div>
  );
}
export default Context;
