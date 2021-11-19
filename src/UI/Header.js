import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { FavContext } from "../context/favorite-context";

// import BookmarkIcon from "@mui/icons-material/Bookmark";
function Header() {
  const favCtx = useContext(FavContext);

  return (
    <header className={classes.header}>
      <Link to="/home">
        <div className={classes.logo}>Quote Notes</div>
      </Link>
      <nav className={classes.navbar}>
        <ul className={classes.navlist}>
          <li className={classes.navlist__item}>
            <Link activeClassName="active" to="/all-quotes">
              All Quotes
            </Link>
          </li>
          <li className={classes.navlist__item}>
            <Link activeClassName="active" to="/add-a-quote">
              Add a Quote
            </Link>
          </li>

          <Link to="/favorites" className={classes.navlist__item}>
            Favorites
            <span className={classes.badge}>{favCtx.favCount}</span>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
