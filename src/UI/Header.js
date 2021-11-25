import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Header.module.css";
import { FavContext } from "../context/favorite-context";
import { useAuth } from "../context/auth-context-new";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
function Header() {
  const { isLoggedIn, signout } = useAuth();

  const favCtx = useContext(FavContext);
  let badgeCount;
  if (localStorage.getItem("favQuotes") !== null) {
    badgeCount = JSON.parse(localStorage.getItem("favQuotes")).length;
  } else {
    badgeCount = favCtx.favCount;
  }

  //Logout
  // const logoutHandler = () => {
  //   authCtx.logout();
  // };
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
          {!isLoggedIn && (
            <li className={classes.navlist__item}>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li className={classes.navlist__item}>
              <NavLink to="/favorites" activeClassName={classes.active}>
                Favorites
                <span className={classes.badge}>{badgeCount}</span>
              </NavLink>
            </li>
          )}

          {isLoggedIn && (
            <li className={classes.navlist__item}>
              <button onClick={() => signout()}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
