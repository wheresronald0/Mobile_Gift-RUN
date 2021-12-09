import React, { useReducer } from "react";
import dbConnectApi from "../api/dbConnect";

const UserAuthContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "sign_up":
      console.log("sign up");
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoggedIn: false,
  });

  const signUp = (email, password) => {
    return async () => {
      try {
        const response = await dbConnectApi.post("/signup", {
          email: email,
          password: password,
        });
        console.log(response.data.token);
      } catch (err) {
        console.log("not working");
      }
    };
  };

  //signin
  const signIn = () => {
    return;
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
