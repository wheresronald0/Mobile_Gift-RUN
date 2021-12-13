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
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "change_run_name":
      return { ...state, runName: action.payload };
    case "save_run":
      return { recording: false };
    default:
      return state;
  }
};
export const RunDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    runDetails: [],
    recording: false,
    locations: [],
    currentLocation: null,
    runName: "",
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

  const startRecording = () => {
    dispatch({ type: "start_recording" });
  };

  const stopRecording = () => {
    dispatch({ type: "stop_recording" });
  };

  const changeRunName = (name) => {
    dispatch({ type: "change_run_name", payload: name });
    //console.log(name);
  };

  const saveRun = () => {
    dispatch({ type: "save_run" });
  };

  return (
    <RunDataContext.Provider
      value={{
        state: state,
        saveRunManually: saveRunManually,
        addLocation: addLocation,
        startRecording: startRecording,
        stopRecording: stopRecording,
        changeRunName: changeRunName,
        saveRun: saveRun,
      }}
    >
      {children}
    </RunDataContext.Provider>
  );
};

export default RunDataContext;
