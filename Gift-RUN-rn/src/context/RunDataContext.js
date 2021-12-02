import React, { useReducer } from "react";

const RunDataContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "save_run":
      return { ...state, runDetails: action.payload };
    default:
      return state;
  }
};
export const RunDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    runDetails: "",
  });

  const saveRunManually = (name) => {
    return dispatch({ type: "save_run", payload: name });
  };

  return (
    <RunDataContext.Provider
      value={{ state: state, saveRunManually: saveRunManually }}
    >
      {children}
    </RunDataContext.Provider>
  );
};

export default RunDataContext;
