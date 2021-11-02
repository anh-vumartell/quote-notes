/*What I need to do:
- Import useReducer hook
- Initial input state object: intial state of inputs
- A reducer function, switch cases: INPUT, BLUR, RESET
- Call the useReducer hook inside this useInput component */
import { useReducer } from "react";

//Initialize initial input state
const initialInputState = {
  value: "",
  isTouched: false, //all inputs are untouched in the beginning
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched };
    case "BLUR":
      return { value: state.value, isTouched: true };
    case "RESET":
      return { value: "", isTouched: false };
    default:
      throw new Error("Oops! Something went wrong!");
  }
};

const useInput = (validateInput) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

  //Derived state constances
  const valueIsValid = validateInput(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  //function to dispatch actions: input, blur and reset
  const inputChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const inputReset = () => {
    dispatch({ type: "RESET" });
  };

  //this useInput hook return an object - a goodie bag of values and methods which
  // we can access in component where useInput is called
  return {
    value: inputState.value,
    valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    inputReset,
  };
};
export default useInput;
