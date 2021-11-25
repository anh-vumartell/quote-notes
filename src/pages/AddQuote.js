import React, { useEffect } from "react";
import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";
import { addNewQuote } from "../lib/database";
import { useAuth } from "../context/auth-context-new";
// import { useHttp } from "../hooks/use-http";
// import { sendQuoteHandler } from "../lib/api";

function AddQuote(props) {
  // const { requestHandler, status } = useHttp(sendQuoteHandler);
  const history = useHistory();
  const { currentUser } = useAuth();

  // useEffect(() => {
  //   /*hisotry.push("name-of-path-to-return") so we can come back
  //       history.replace("name-of-path") is like a redirect, not coming back*/
  //   if (status === "completed") {
  //     history.push("/all-quotes");
  //   }
  // }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    if (currentUser !== null) {
      addNewQuote(quoteData);
    } else {
      alert("please log in to add");
    }
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default AddQuote;
