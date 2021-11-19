import React, { useContext } from "react";
import FavoriteList from "../components/quotes/FavoriteList";
import { FavContext } from "../context/favorite-context";

const Favorites = (props) => {
  const favCtx = useContext(FavContext);
  const favorites = favCtx.favorites;
  return (
    <>
      <h1>List of favorites</h1>
      <p>
        You have <b>{favCtx.favCount}</b> favorite quotes
      </p>
      <FavoriteList favorites={favorites} />{" "}
    </>
  );
};
export default Favorites;
