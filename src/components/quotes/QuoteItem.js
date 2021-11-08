import classes from "./QuoteItem.module.css";
import { Link } from "react-router-dom";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import DeleteIcon from "@mui/icons-material/Delete";
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
        <div onClick={props.onRemove} className={classes.remove}>
          <DeleteIcon sx={{ fontSize: 32 }} />
        </div>
        <div className={classes.fullscreen}>
          <Link to={`/all-quotes/${props.id}`}>
            <FullscreenIcon sx={{ fontSize: 32 }} />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default QuoteItem;
