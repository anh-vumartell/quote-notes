import React from "react";
import { useAuth } from "../context/auth-context-new";
import LoadingSpinner from "../UI/LoadingSpinner";
function HomePage(props) {
  const { currentUser, isLoggedIn, isLoading } = useAuth();
  console.log(currentUser);
  return (
    <div>
      {isLoading && <LoadingSpinner />}
      <h1>{`Welcome ${
        currentUser && isLoggedIn ? currentUser.email : " "
      } to Quote Notes`}</h1>
    </div>
  );
}

export default HomePage;
