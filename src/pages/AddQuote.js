import React, { useEffect } from "react";
import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHttp } from "../hooks/use-http";
import { sendQuoteHandler } from "../lib/api";

function AddQuote(props) {
  const { requestHandler, status } = useHttp(sendQuoteHandler);
  const history = useHistory();

  useEffect(() => {
    /*hisotry.push("name-of-path-to-return") so we can come back
        history.replace("name-of-path") is like a redirect, not coming back*/
    if (status === "completed") {
      history.push("/all-quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    requestHandler(quoteData);
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
}

export default AddQuote;
