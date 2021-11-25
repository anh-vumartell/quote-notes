import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { FavProvider } from "../src/context/favorite-context";
import { AuthProvider } from "./context/auth-context-new";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <AuthProvider>
    <FavProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavProvider>
  </AuthProvider>,
  document.getElementById("root")
);
