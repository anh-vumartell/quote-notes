import React from "react";

import QuoteForm from "../quotes/QuoteForm";
function NewQuote(props) {
  return <QuoteForm onAddQuote={props.onAddQuote} />;
}

export default NewQuote;
