import React, { useReducer } from "react";
import dbConnectApi from "../api/dbConnect";

const UserAuthContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "auth_success":
      return { ...state, token: action.payload, errorMessage: "" };
    case "auth_failed":
      return {
        ...state,
        errorMessage:
          "Our appologies, but sosmething went wrong. Please check the information entered",
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoggedIn: false,
    errorMessage: "",
  });

  const signUp = (email, password) => {
    return async () => {
      try {
        const response = await dbConnectApi.post("/signup", {
          email: email,
          password: password,
        });
        console.log(response.data.token);
        dispatch({ type: "auth_success", payload: response.data.token });
      } catch (err) {
        console.log(err);
        dispatch({
          type: "auth_failed",
        });
      }
    };
  };

  //signin
  const signIn = (email, password) => {
    return async () => {
      try {
        const response = await dbConnectApi.post("/signin", {
          email: email,
          password: password,
        });
        console.log(response.data.token);
        dispatch({ type: "auth_success", payload: response.data.token });
      } catch (err) {
        console.log(err);
        dispatch({
          type: "auth_failed",
        });
      }
    };
  };

  return (
    <UserAuthContext.Provider
      value={{ state: state, signUp: signUp, signIn: signIn }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;
