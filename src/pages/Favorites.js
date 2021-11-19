import React, { useContext } from "react";
import FavoriteList from "../components/quotes/FavoriteList";
import { FavContext } from "../context/favorite-context";

const Favorites = (props) => {
  const favCtx = useContext(FavContext);
  let favorites;
  if (localStorage.getItem("favQuotes") !== null) {
    favorites = JSON.parse(localStorage.getItem("favQuotes"));
  } else {
    favorites = favCtx.favorites;
  }
  console.log(favorites);
  const removeFavList = () => {
    localStorage.removeItem("favQuotes");
    favCtx.setFavList([]);
    favCtx.setFavCount(0);
  };

  return (
    <>
      <h1>List of favorites</h1>
      {
        <p>
          You have{" "}
          {favorites.length <= 1
            ? `${favorites.length} favorite quote`
            : `${favorites.length} favorite quotes`}
        </p>
      }
      <FavoriteList favorites={favorites} />{" "}
      {favorites.length !== 0 && (
        <button className="btn--minimal" onClick={removeFavList}>
          Clear list
        </button>
      )}
    </>
  );
};
export default Favorites;
