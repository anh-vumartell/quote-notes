import classes from "./QuoteItem.module.css";
import { Link } from "react-router-dom";

// import { removeQuote } from "../../lib/api";
const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>"{props.text}"</p>
        </blockquote>
        <figcaption>by {props.author}</figcaption>
      </figure>
      <div className={classes["col-right"]}>
        <button onClick={props.onRemove} className={classes.remove}>
          &#x2718;
        </button>
        <Link to={`/all-quotes/${props.id}`} className="btn">
          View Fullscreen
        </Link>
      </div>
    </li>
  );
};

export default QuoteItem;
