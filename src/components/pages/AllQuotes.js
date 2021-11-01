import { React } from "react";
import QuoteList from "../quotes/QuoteList";
function AllQuotes(props) {
  return (
    <div>
      <QuoteList quotes={props.quotes} />
    </div>
  );
}

export default AllQuotes;
