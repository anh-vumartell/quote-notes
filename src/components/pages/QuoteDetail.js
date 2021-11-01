import React from "react";
import { useParams, Route } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import NoQuotesFound from "../quotes/NoQuotesFound";
import Comments from "../comments/Comments";
const DUMMY_QUOTES = [
  {
    author: "Ngoc Anh",
    text: "Reading is another way to broaden your horizon.",
    id: 1,
  },
  {
    author: "Conny Martell",
    text: "Believing in yourself is 50% of success.",
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
