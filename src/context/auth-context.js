import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

//Global variables
let logoutTimer;

export function useAuth() {
  return useContext(AuthContext);
}
//Helper functions
// const calculateRemainingTime = (expirationTime) => {
//   const currentTime = new Date().getTime();
//   const adjExpirationTime = new Date(expirationTime).getTime();
//   //remainning = futureTime - now;
//   const remainingTime = adjExpirationTime - currentTime;

//   return remainingTime;
// };

// const retrieveStoredToken = () => {
//   const storedToken = localStorage.getItem("token");
//   console.log(storedToken);
//   const storedExpirationDate = localStorage.getItem("expirationTime");

//   const remainingTime = calculateRemainingTime(storedExpirationDate);

//   if (remainingTime <= 60000) {
//     localStorage.removeItem("token");
//     localStorage.removeItem("expirationTime");
//     return null;
//   }

//   return { token: storedToken, duration: remainingTime };
// };

//Step 1: Create context
export const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

//Step 2: Create context Provider, a regular function component
export const AuthContextProvider = (props) => {
  //Get initial token
  // const initialToken = localStorage.getItem("token");

  //Create local state being share accross the app
  const [token, setToken] = useState(null);
  const [currentEmail, setCurrentEmail] = useState();

  // const userIsLoggedIn = !!token; //!! change a truthy or falsy value to a boolean value
  /*token is a string which has value (truthy)
  token is an empty string (falsy) */
  const userIsLoggedIn = Boolean(token);

  const loginHandler = (token, deadLine, email) => {
    setCurrentEmail(email);
    setToken(token);
    console.log(token);
    localStorage.setItem("token", token);
    localStorage.setItem("deadLine", deadLine);

    //logout user automatically after calculated remainingTime
    logoutTimer = setTimeout(logoutHandler, deadLine - Date.now());
  };

  //logout function is wrapped in useCallback to prevent unnessary recreation when the App initially renders
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    clearTimeout(logoutTimer);
  }, []);

  //useEffect is evoked when the state of "token" changes
  useEffect(() => {
    if (token) {
      let remainingTime = localStorage.getItem("deadLine") - Date.now();
      if (remainingTime <= 60000) logoutHandler();
    }
  }, [token, logoutHandler]);

  //Step 3: Adding state to the authContextProvider
  //Prepare value being shared
  const authValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    currentEmail: currentEmail,
  };

  /*Set "authValue" as the value for "value" attribute */
  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
