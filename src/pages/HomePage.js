import React from "react";
import { useAuth } from "../context/auth-context";
import LoadingSpinner from "../UI/LoadingSpinner";

function HomePage(props) {
  const { isLoading, currentEmail, isLoggedIn } = useAuth();

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {currentEmail && isLoggedIn && (
        <h1>
          Hello <u>{currentEmail}</u>! Welcome to Quote Notes!
        </h1>
      )}
      {!isLoggedIn && <h1>Welcome to Quote Notes!</h1>}
    </div>
  );
}

export default HomePage;
