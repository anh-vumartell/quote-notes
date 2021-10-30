import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/UI/Header";
import QuoteForm from "./components/quotes/QuoteForm";
import QuoteList from "./components/quotes/QuoteList";

function App() {
  const [quotes, setQuotes] = useState([]);

  const quotesHandler = (quote) => {
    setQuotes([...quotes, quote]);
  };
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/all-quotes" exact>
            <QuoteList quotes={quotes} />
          </Route>
          <Route path="/add-a-quote" exact>
            <h1>Add your own quotes</h1>
            <QuoteForm onAddQuote={quotesHandler} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

//A All quotes - page: show all quotes
// A quote : show a quote
// A Add quote - page : add new quote
