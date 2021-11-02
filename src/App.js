import { useState, useCallback, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout/Layout";
import QuoteDetail from "./components/pages/QuoteDetail";
import NotFound from "./components/pages/NotFound";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import LoadingSpinner from "./components/UI/LoadingSpinner";

function App() {
  //Set up state slices
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuotesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://quote-notes-default-rtdb.europe-west1.firebasedatabase.app/quotes.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const quotesData = await response.json();
      const quotesArr = Object.entries(quotesData);
      console.log(quotesArr);

      const transformedData = quotesArr.map((quote) => {
        return {
          id: quote[1].id,
          author: quote[1].author,
          text: quote[1].text,
        };
      });
      setQuotes(transformedData);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    fetchQuotesHandler();
  }, [fetchQuotesHandler]);
  const addQuoteHandler = (quote) => {
    setQuotes([...quotes, quote]);
  };
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/all-quotes" />
          </Route>
          <Route path="/all-quotes" exact>
            {isLoading && <LoadingSpinner />}
            <AllQuotes quotes={quotes} />
          </Route>
          <Route path="/all-quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/add-a-quote">
            <h1>Add your own quotes</h1>
            <NewQuote onAddQuote={addQuoteHandler} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

//A All quotes - page: show all quotes
// A quote detail page : show a quote detail
// A Add quote - page : add new quote
