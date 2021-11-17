import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import BookmarkIcon from "@mui/icons-material/Bookmark";
function Header() {
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
