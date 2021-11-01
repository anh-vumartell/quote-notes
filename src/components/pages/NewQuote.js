import React from "react";
import QuoteForm from "../quotes/QuoteForm";
function NewQuote(props) {
  return (
    <div>
      <QuoteForm onAddQuote={props.onAddQuote} />
    </div>
  );
}

export default NewQuote;
