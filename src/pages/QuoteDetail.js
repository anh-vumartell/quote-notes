import React, { useEffect, useContext } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { FavContext } from "../context/favorite-context";
import Comments from "../components/comments/Comments";
import { useHttp } from "../hooks/use-http";
import { fetchSingleQuote } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import FavoriteIcon from "@mui/icons-material/Favorite";

function QuoteDetail(props) {
  const favCtx = useContext(FavContext);
  const favList = favCtx.favorites;
  const addFavHandler = () => {
    // favCtx.setFavList(() => [...favCtx.favorites, loadedQuote]);
    favList.push(loadedQuote);
    console.log(favList);
    favCtx.setFavCount((prevCount) => prevCount + 1);
    localStorage.setItem("favQuotes", JSON.stringify(favList));
  };

  const params = useParams();

  const { quoteId } = params;

  const match = useRouteMatch();

  const {
    requestHandler,
    status,

    data: loadedQuote,
  } = useHttp(fetchSingleQuote, true);

  useEffect(() => {
    requestHandler(quoteId);
  }, [requestHandler, quoteId]);

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
          <button onClick={addFavHandler} className="btn">
            <FavoriteIcon /> Add Favorite
          </button>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}

export default QuoteDetail;
