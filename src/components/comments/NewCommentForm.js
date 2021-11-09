import { useRef, useEffect } from "react";
import classes from "./NewCommentForm.module.css";
import { useHttp } from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../../UI/LoadingSpinner";
const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  //Evoke custom hook
  const { requestHandler, status, error } = useHttp(addComment);
  const { onAddedComment } = props;

  //useEffect
  useEffect(() => {
    if (status === "completed" && !error) {
      //fetch all comments if sending succeeds
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const commentContent = commentTextRef.current.value;

    // optional: Could validate here

    // send comment to server
    requestHandler({
      commentData: commentContent,
      quoteId: props.quoteId,
    });
    //clear text input field
    commentTextRef.current.value = "";
  };
  let content;
  if (status === "pending") {
    content = <LoadingSpinner />;
  }
  // if (status === "completed") {
  //   content = <p>Successfully added comment!</p>;
  // }
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
      {content}
    </form>
  );
};

export default NewCommentForm;
