import { useState, useEffect, useCallback } from "react";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { useParams } from "react-router";
import { useHttp } from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import CommentList from "../comments/CommentsList";
const Comments = () => {
  const { quoteId } = useParams();
  const [isAddingComment, setIsAddingComment] = useState(false);

  //Evoke custom hook
  const {
    requestHandler,
    status,
    data: loadedComments,
    error,
  } = useHttp(getAllComments);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const addedCommentHandler = useCallback(() => {
    requestHandler(quoteId);
  }, [requestHandler, quoteId]);
  //fetch all comments when this component re-render
  useEffect(() => {
    requestHandler(quoteId);
  }, [requestHandler, quoteId]);

  let content;
  if (status === "pending" && !error) {
    content = (
      <div className="centered">
        <p>Loading comments...</p>;
      </div>
    );
  }
  if (status === "completed" && (loadedComments || loadedComments.length > 0)) {
    content = <CommentList comments={loadedComments} />;
  }
  if (!loadedComments || loadedComments.length === 0) {
    content = (
      <p className="centered">There are no comments yet! Maybe adding one?</p>
    );
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {content}
    </section>
  );
};

export default Comments;
