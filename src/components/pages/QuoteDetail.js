import React, { useState } from "react";
import { useParams, Route, Link } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import NoQuotesFound from "../quotes/NoQuotesFound";
import Comments from "../comments/Comments";

// const DUMMY_QUOTES = [
//   {
//     author: "Elbert Hubbard",
//     text: "The greatest mistake you can make in life is to be continually fearing you will make one.",
//     id: 1,
//   },
//   {
//     author: "Albert Einstein",
//     text: "Life is like riding a bicycle. To keep your balance you must keep moving.",
//     id: 2,
//   },
// ];
function QuoteDetail(props) {
  const params = useParams();
  const [likeCount, setLikeCount] = useState(0);

  console.log(params);
  const quote = props.quotes.find((quote) => quote.id === +params.quoteId);
  console.log(quote);
  if (!quote) {
    return <NoQuotesFound />;
  }

  const likeCountHandler = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h1>Here is No. {params.quoteId} quote goes</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/all-quotes/${params.quoteId}`} exact>
        <div className="actions">
          <Link className="btn" to={`/all-quotes/${params.quoteId}/comments`}>
            Leave a comment
          </Link>
          <button onClick={likeCountHandler} className="btn">
            Like quote <span>{likeCount}</span>
          </button>
        </div>
      </Route>

      <Route path={`/all-quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}

export default QuoteDetail;
