import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { FavProvider } from "../src/context/favorite-context";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <FavProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavProvider>,

  document.getElementById("root")
);
