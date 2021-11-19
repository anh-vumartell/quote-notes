import React from "react";
import QuoteItem from "./QuoteItem";
const FavoriteList = (props) => {
  return props.favorites.map((fav) => (
    <QuoteItem text={fav.text} author={fav.author} />
  ));
};
export default FavoriteList;
