import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
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
            <NavLink activeClassName={classes.active} to="/all-quotes">
              All Quotes
            </NavLink>
          </li>
          <li className={classes.navlist__item}>
            <NavLink activeClassName={classes.active} to="/add-a-quote">
              Add a Quote
            </NavLink>
          </li>

          <NavLink to="/favorites" activeClassName={classes.active}>
            Favorites
            <span className={classes.badge}>{favCtx.favCount}</span>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
