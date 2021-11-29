import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Favorites from "./pages/Favorites";
import LoadingSpinner from "./UI/LoadingSpinner";
import AuthPage from "./pages/AuthPage";
import { useAuth } from "./context/auth-context";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const AddQuote = React.lazy(() => import("./pages/AddQuote")); //downloaded when needed
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            {!isLoggedIn && (
              <Route path="/auth">
                <AuthPage />
              </Route>
            )}
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
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;

//A All quotes - page: show all quotes
// A quote detail page : show a quote detail
// A Add quote - page : add new quote
