import React from "react";
import { useParams, Route } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import NoQuotesFound from "../quotes/NoQuotesFound";
import Comments from "../comments/Comments";
const DUMMY_QUOTES = [
  {
    author: "Elbert Hubbard",
    text: "The greatest mistake you can make in life is to be continually fearing you will make one.",
    id: 1,
  },
  {
    author: "Albert Einstein",
    text: "Life is like riding a bicycle. To keep your balance you must keep moving.",
    id: 2,
  },
];
function QuoteDetail(props) {
  const params = useParams();
  console.log(params.quoteId);
  const quote = DUMMY_QUOTES.find((quote) => quote.id === +params.quoteId);
  console.log(quote);
  if (!quote) {
    return <NoQuotesFound />;
  }
  return (
    <div>
      <h1>Here is No. {params.quoteId} quote goes</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/all-quotes/${params.quoteId}`}>
        <Comments />
      </Route>
    </div>
  );
}

export default QuoteDetail;
