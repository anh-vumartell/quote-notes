import { Fragment, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import database from "../../lib/database";
import { ref, set } from "firebase/database";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

/* useHistory(): allow change page history, manage URL
useLocation(): location object gives info of the current loaded page */
//HELPER FUNCTION
/*SIDE NOTE: If we click "Sort Ascending"-btn, the location object is logged over and over again. 
It means that wehen we push the page (ending in "?sort=asc") the page rerenders */
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

  //built-in constructor JS class which can be used in browser
  const queryParam = new URLSearchParams(location.search);

  const isSortingAscending = queryParam.get("sort") === "asc";

  const [refreshedQuotes, setRefreshedQuotes] = useState(
    sortQuotes(props.quotes, isSortingAscending)
  );
  // //sorted quotes
  // const sorted = sortQuotes(props.quotes, isSortingAscending);

  //change sorting
  const changeSortingHandler = () => {
    //update the sharable URL
    history.push(
      `${location.pathname}?sort=${isSortingAscending ? "desc" : "asc"}`
    );
  };

  const removeQuote = (id) => {
    // console.log(ref(database, `quotes/${props.id}`).key);
    //use database reference to update
    set(ref(database, `quotes/${id}`), null);
    //update the UI
    setRefreshedQuotes(refreshedQuotes.filter((quote) => quote.id !== id));
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {refreshedQuotes.map((quote) => (
          <QuoteItem
            onRemove={() => {
              removeQuote(quote.id);
            }}
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
