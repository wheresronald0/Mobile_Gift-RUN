import React, { useReducer } from "react";
import dbConnectApi from "../api/dbConnect";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from "../navigation/RootNavigation";

const UserAuthContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "auth_success":
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true,
        errorMessage: "",
      };
    case "auth_failed":
      return {
        ...state,
        errorMessage:
          "Our appologies, but sosmething went wrong. Please check the information entered",
      };
    case "sign_out":
      return { ...state, token: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoggedIn: false,
    errorMessage: "",
    token: null,
  });

  //Check to see if token is locally stored, i.e. user has already logged in
  const tryLocalSignin = async () => {
    const token = await AsyncStorage.getItem("token");
    console.log("got the token:", token);
    if (token) {
      dispatch({ type: "auth_success", payload: token });
      RootNavigation.navigate("MainFlow");
    } else {
      RootNavigation.navigate("AuthFlow");
    }
  };

  //SIGNUP
  const signUp = (email, password) => {
    return async () => {
      try {
        const response = await dbConnectApi.post("/signup", {
          email: email,
          password: password,
        });
        console.log(response.data.token);
        await AsyncStorage.setItem("token", response.data.token);
        dispatch({ type: "auth_success", payload: response.data.token });
      } catch (err) {
        console.log(err);
        dispatch({
          type: "auth_failed",
        });
      }
      RootNavigation.navigate("MainFlow");
    };
  };

  //SIGNIN
  const signIn = (email, password) => {
    return async () => {
      try {
        const response = await dbConnectApi.post("/signin", {
          email: email,
          password: password,
        });
        console.log(response.data.token);
        await AsyncStorage.setItem("token", response.data.token);
        dispatch({ type: "auth_success", payload: response.data.token });
      } catch (err) {
        console.log(err);
        dispatch({
          type: "auth_failed",
        });
      }
      RootNavigation.navigate("MainFlow");
    };
  };

  const signOut = async () => {
    await AsyncStorage.clear();
    dispatch({ type: "sign_out" });
    RootNavigation.navigate("AuthFlow");
  };

  return (
    <UserAuthContext.Provider
      value={{
        state: state,
        signUp: signUp,
        signIn: signIn,
        tryLocalSignin: tryLocalSignin,
        signOut: signOut,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;
