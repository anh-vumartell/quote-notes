import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import BookmarkIcon from "@mui/icons-material/Bookmark";
function Header() {
  return (
    <header className={classes.header}>
      <h1>Quote Notes</h1>
      <nav className={classes.navbar}>
        <ul className={classes.navlist}>
          <li className={classes.navlist__item}>
            <NavLink activeClassName="active" to="/all-quotes">
              All Quotes
            </NavLink>
          </li>
          <li className={classes.navlist__item}>
            <NavLink activeClassName="active" to="/add-a-quote">
              Add a Quote
            </NavLink>
          </li>
          <li className={classes.navlist__item}>
            Favorites
            <span>
              <BookmarkIcon sx={{ fontSize: 18 }} />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
