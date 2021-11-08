import { Route, Switch, Redirect } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout/Layout";
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from "./pages/NotFound";
import AllQuotes from "./pages/AllQuotes";

import AddQuote from "./pages/AddQuote";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/all-quotes" />
          </Route>
          <Route path="/all-quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/all-quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/add-a-quote">
            <h1>Add your own quotes</h1>
            <AddQuote />
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
