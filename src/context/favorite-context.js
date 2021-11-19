import { createContext, useState } from "react";

//create new context
export const FavContext = createContext();

//create new context provider component
export const FavProvider = (props) => {
  const [favList, setFavList] = useState([]);
  const [favCount, setFavCount] = useState(0);
  //value to be shared
  const favValue = {
    favorites: favList,
    setFavList: setFavList,
    favCount: favCount,
    setFavCount: setFavCount,
  };
  return (
    <FavContext.Provider value={favValue}>{props.children}</FavContext.Provider>
  );
};
