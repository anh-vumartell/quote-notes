import React, { useState, useRef } from "react";
import classes from "./AuthForm.module.css";
import { useAuth } from "../../context/auth-context-new";
import { useHistory } from "react-router-dom";
import app from "../../lib/firebase.js";
function AuthFormNew(props) {
  const [isLogin, setIsLogin] = useState(true);
  const history = useHistory();
  const fnameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { isLoading, signup, error, signin } = useAuth();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredFullName = fnameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    //Validation

    if (isLogin) {
      //Sign in existing users
      signin(enteredEmail, enteredPassword);
      history.push("/");
    } else {
      //Create new user
      signup(enteredFullName, enteredEmail, enteredPassword);
      history.push("/auth");
    }
    if (error) {
      alert(error);
    }
    //reset inputs
    fnameInputRef.current.value = "";
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
    fnameInputRef.current.focus();
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="fname">Fullname</label>
          <input type="fname" id="fname" required ref={fnameInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthFormNew;
