import { Fragment } from "react";
import Header from "../UI/Header";
import classes from "./Layout.module.css";
function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
