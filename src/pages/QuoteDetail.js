import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

import Comments from "../components/comments/Comments";
import { useHttp } from "../hooks/use-http";
import { fetchSingleQuote } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import FavoriteIcon from "@mui/icons-material/Favorite";

function QuoteDetail(props) {
  const params = useParams();

  const { quoteId } = params;

  const match = useRouteMatch();

  const {
    requestHandler,
    status,
    data: loadedQuote,
    error,
  } = useHttp(fetchSingleQuote, true);
  useEffect(() => {
    requestHandler(quoteId);
  }, [requestHandler, quoteId]);
  // console.log(match);
  // console.log(params);

  // console.log(quote);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {status === "pending" ? (
        <LoadingSpinner />
      ) : (
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      )}

      <Route path={match.path} exact>
        <div className="actions">
          <Link className="btn" to={`${match.url}/comments`}>
            Leave a comment
          </Link>
          <div className="btn">
            <FavoriteIcon /> Add Favorite
          </div>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}

export default QuoteDetail;
