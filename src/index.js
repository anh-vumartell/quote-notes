import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { FavProvider } from "../src/context/favorite-context";
import { AuthContextProvider } from "../src/context/auth-context";
import "./index.css";
import { app } from "../src/lib/firebase";
import App from "./App";

ReactDOM.render(
  <AuthContextProvider>
    <FavProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
