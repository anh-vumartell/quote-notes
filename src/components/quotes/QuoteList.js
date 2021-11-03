import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

/* useHistory(): allow change page history, manage URL
useLocation(): location object gives info of the current loaded page */
//HELPER FUNCTION
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  //built-in constructor JS class which can be used in browser
  const queryParam = new URLSearchParams(location.search);

  const isSortingAscending = queryParam.get("sort") === "asc";

  //sorted quotes
  const sorted = sortQuotes(props.quotes, isSortingAscending);

  //change sorting
  const changeSortingHandler = () => {
    //update the sharable URL
    history.push("/all-quotes?sort=" + (isSortingAscending ? "desc" : "asc"));
  };
  /*SIDE NOTE: If we click "Sort Ascending"-btn, the location object is logged over and over again. 
It means that wehen we push the page (ending in "?sort=asc") the page rerenders */
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sorted.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
