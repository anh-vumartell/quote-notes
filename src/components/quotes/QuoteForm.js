import { Fragment, useState } from "react";

import useInput from "../../hooks/use-input";
import Card from "../../UI/Card";
import LoadingSpinner from "../../UI/LoadingSpinner";

import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  // const authorInputRef = useRef();
  // const textInputRef = useRef();
  const [isEntering, setIsEntering] = useState(false);

  //Using useInput hook here
  const {
    value: enteredAuthor,
    valueIsValid: authorNameIsValid,
    hasError: authorNameHasError,
    inputChangeHandler: authorNameChangeHandler,
    inputBlurHandler: authorNameBlurHandler,
    inputReset: authorNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredText,
    valueIsValid: textIsValid,
    hasError: textHasError,
    inputChangeHandler: textChangeHandler,
    inputBlurHandler: textBlurHandler,
    inputReset: textReset,
  } = useInput((value) => value.trim() !== "");

  //derived state of form
  let formIsValid = false;
  if (authorNameIsValid && textIsValid) {
    formIsValid = true;
  }

  //Form submission handler
  const submitFormHandler = (event) => {
    event.preventDefault();

    // const enteredAuthor = authorInputRef.current.value;
    // const enteredText = textInputRef.current.value;

    //not submitting if form is not valid
    if (!formIsValid) {
      return;
    }

    //Reset all inputs upon submission
    authorNameReset();
    textReset();

    const quoteData = {
      author: enteredAuthor,
      text: enteredText,
      createdAt: new Date().toDateString(),
    };

    //sending new quote to database
    props.onAddQuote(quoteData);
  };
  /*this function is created outside the form submission function
  since the submitFormHandler also triggered navigation so the setIsEntering cannot be done (it's
  too late to update the isEntering state*/
  const formFocusedHandler = () => {
    setIsEntering(true);
  };
  const finnishEnteringHandler = () => {
    //not blockinh page navigation
    setIsEntering(false);
  };

  return (
    <Fragment>
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              value={enteredAuthor}
              onChange={authorNameChangeHandler}
              onBlur={authorNameBlurHandler}
            />
            {authorNameHasError && (
              <p className="error-text">Must enter author name!</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              rows="5"
              value={enteredText}
              onChange={textChangeHandler}
              onBlur={textBlurHandler}
            ></textarea>
            {textHasError && (
              <p className="error-text">Must enter quote here!</p>
            )}
          </div>
          <div className={classes.actions}>
            <button onClick={finnishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
