import React, { useContext, useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
// import app from "../lib/firebase.js";
import { writeUserData } from "../lib/database.js";
const AuthContext = React.createContext();
const auth = getAuth();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  //SignUp
  function signup(fname, email, password) {
    let newUser;
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        newUser = {
          displayName: fname,
          userId: userCredential.user.uid,
          email: userCredential.user.email,
        };
        writeUserData(newUser.displayName, newUser.userId, newUser.email);
        setIsLoading(false);
        return newUser;
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  //SignIn
  function signin(email, password) {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.uid;
        console.log(user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setError(error.message);
      });
    setIsLoading(false);
  }

  //Signout
  function signout() {
    auth.signOut();
    setIsLoggedIn(false);
  }
  useEffect(() => {
    const unsubcriber = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubcriber;
  }, []);
  const value = {
    isLoading,
    currentUser,
    error,
    signup,
    signin,
    signout,
    isLoggedIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
