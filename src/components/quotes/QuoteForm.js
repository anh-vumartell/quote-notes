import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/use-input";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import RouterPrompt from "../UI/RouterPrompt";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const history = useHistory();
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
  //Function to send quote data to database
  const sendQuoteHandler = async (quoteData) => {
    try {
      const response = await fetch(
        "https://quote-notes-default-rtdb.europe-west1.firebasedatabase.app/quotes.json",
        {
          method: "POST",
          body: JSON.stringify(quoteData),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
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
      id: Math.floor(Math.random() * 100 + 1),
    };
    props.onAddQuote(quoteData);
    /*hisotry.push("name-of-path-to-return") so we can come back
    history.replace("name-of-path") is like a redirect, not coming back*/
    history.push("/all-quotes");

    //sending new quote to database
    sendQuoteHandler(quoteData);
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
      <RouterPrompt
        when={isEntering}
        title="Leave this page"
        cancelText="Cancel"
        okText="Confirm"
        onOk={() => true}
        onCancel={() => false}
      />
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
