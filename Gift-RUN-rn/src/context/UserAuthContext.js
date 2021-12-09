import React, { Children, useReducer } from "react";

const UserAuthContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <UserAuthContext.Provider value={{ state: state }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;
