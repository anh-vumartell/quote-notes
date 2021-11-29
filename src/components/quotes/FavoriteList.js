import React from "react";
import QuoteItem from "./QuoteItem";
const FavoriteList = (props) => {
  let content;
  if (props.favorites.length === 0) {
    content = <p>No favorite quotes yet! Maybe adding one?</p>;
  } else {
    content = props.favorites.map((fav) => (
      <QuoteItem
        key={fav.id}
        text={fav.text}
        author={fav.author}
        createdAt={fav.createdAt}
      />
    ));
  }
  return content;
};
export default FavoriteList;
