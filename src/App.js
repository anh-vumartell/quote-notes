import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout/Layout";
import QuoteForm from "./components/quotes/QuoteForm";
import QuoteList from "./components/quotes/QuoteList";
import QuoteDetail from "./components/quotes/QuoteDetail";
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
function App() {
  //Set up state slices
  const [quotes, setQuotes] = useState(DUMMY_QUOTES);

  const quotesHandler = (quote) => {
    //update state of quotes
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
            <QuoteList quotes={quotes} />
          </Route>
          <Route path="/all-quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/add-a-quote">
            <h1>Add your own quotes</h1>
            <QuoteForm onAddQuote={quotesHandler} />
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
