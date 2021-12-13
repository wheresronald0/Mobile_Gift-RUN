import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@ui-kitten/components";
import RunDataContext from "../context/RunDataContext";

const AutoTrackForm = () => {
  const { state, startRecording, stopRecording, saveRun } =
    useContext(RunDataContext);

  console.log(state.locations.length);

  return (
    <View>
      {state.recording ? (
        <Button style={styles.button} onPress={stopRecording}>
          Stop Recording Run
        </Button>
      ) : (
        <Button style={styles.button} onPress={startRecording}>
          Record Run
        </Button>
      )}
      {state.locations.length && !state.recording ? (
        <Button style={styles.button} onPress={saveRun}>
          Save Run
        </Button>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    width: 350,
  },
});

export default AutoTrackForm;
