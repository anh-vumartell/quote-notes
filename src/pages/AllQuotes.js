import { React, useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import { useHttp } from "../hooks/use-http";
import { fetchQuotesHandler } from "../lib/api.js";
import LoadingSpinner from "../UI/LoadingSpinner";

/*IN THIS PAGE, WE IMPLEMENT FETCHING REQUEST & 
RENDERED FETCHED DATA TO QUOTELIST COMPONENT*/

function AllQuotes(props) {
  const {
    requestHandler,
    status,
    data: receivedQuotes,
    error,
  } = useHttp(fetchQuotesHandler, true);

  //requestHandler is evoked as a side effect of this page load
  useEffect(() => {
    requestHandler();
  }, [requestHandler]);

  //Load the Loadingspinner if the status === 'pending'
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  //Display error text if there is error
  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (
    status === "completed" &&
    (!receivedQuotes || receivedQuotes.length === 0)
  ) {
    return <NoQuotesFound />;
  }
  return (
    <div>
      <QuoteList quotes={receivedQuotes} />
    </div>
  );
}

export default AllQuotes;
