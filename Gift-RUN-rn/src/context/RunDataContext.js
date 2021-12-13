import React, { useReducer } from "react";

const RunDataContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "save_run":
      return { ...state, runDetails: action.payload };
    case "add_current_location_to_map":
      return { ...state, currentLocation: action.payload };
    case "add_location_point":
      return { ...state, locations: [...state.locations, action.payload] };
    default:
      return state;
  }
};
export const RunDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    runDetails: [],
    recording: true,
    locations: [],
    currentLocation: null,
  });

  const saveRunManually = (
    runName,
    date,
    miles,
    lengthOfTime,
    selectedCharity
  ) => {
    return dispatch({
      type: "save_run",
      payload: { runName, date, miles, lengthOfTime, selectedCharity },
    });
  };

  const addLocation = (location, recording) => {
    console.log("tracking", location);
    dispatch({ type: "add_current_location_to_map", payload: location });
    if (recording) {
      dispatch({ type: "add_location_point", payload: location });
    }
  };

  return (
    <RunDataContext.Provider
      value={{
        state: state,
        saveRunManually: saveRunManually,
        addLocation: addLocation,
      }}
    >
      {children}
    </RunDataContext.Provider>
  );
};

export default RunDataContext;
