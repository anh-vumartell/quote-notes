/*WHAT TO DO:
- Import useReducer() hook
- Initial state of http request- an object with keys (status, data, error)
- Create httpReducer function and handle 3 different state scenarios: SENDING, SUCCESS, ERROR)
- Create useHttp hook which takes 2 parameters: requestFunction, pendingState = false as default value
- Evoke useReducer hook to get back httpState and dispatch function
- A requestHandler inside useHttp which dispatch() function is called and receive action object {type: "", value: anyValue} as argument
- requestHandler is evoked only when requestFunction varies (now acts as a dependency) (either "fetching" or "sending")
so it is wrapped up in useCallback() hook*/

import { useCallback, useReducer } from "react";

//const initialHttpState = { status: null, data: null, error: null };

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SENDING":
      return { data: null, error: null, status: "pending" };
    case "SUCCESS":
      return {
        data: action.data,
        error: null,
        status: "completed",
      };
    case "ERROR":
      return {
        data: null,
        error: action.errorMessage,
        status: "completed",
      };
    default:
      return state;
  }
};

export const useHttp = (requestFunction, pendingState = false) => {
  //evoke useReducer hook here, returns [httpState, dispatch]
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: pendingState ? "pending" : null,
    data: null,
    error: null,
  });

  //request function handler
  const requestHandler = useCallback(
    async function (requestData) {
      dispatch({ type: "SENDING" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", data: responseData });
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
      //dependencies array: the requestFunction change depends on what kind of request is concerned
    },
    [requestFunction]
  );

  //useHttp hook returns a goodie bag (an object) of values and methods
  return { requestHandler, ...httpState };
};
