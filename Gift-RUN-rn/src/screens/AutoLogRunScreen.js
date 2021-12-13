import React, { useState, useContext, useCallback } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Layout, Input, Button } from "@ui-kitten/components";

import Map from "../components/Map";
import { LogRunModal } from "../components/LogRunModal";

import RunDataContext from "../context/RunDataContext";
import useLocation from "../hooks/useLocation";
import AutoLogTrackForm from "../components/AutoLogTrackForm";

const RunDetailsScreen = () => {
  //const [autoRunName, setAutoRunName] = useState("");
  const { state, addLocation, changeRunName } = useContext(RunDataContext);

  // to trigger "on/off isTracking once I've navigated from the screen to save battery"
  const shouldTrack = useIsFocused();

  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );

  const [err] = useLocation(shouldTrack || state.recording, callback); //deconstructed return statment from useLocation hook

  return (
    <SafeAreaView>
      <Layout style={styles.container}>
        <Input
          label="Name of Your Run"
          placeholder="Enter Name"
          value={state.runName}
          autoCapitalize="words"
          onChangeText={(name) => changeRunName(name)}
          style={styles.input}
        />
        <Map />
        {err ? <Text>Please enable location services</Text> : null}
        <AutoLogTrackForm style={styles.form} />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  input: {
    marginTop: 30,
    marginHorizontal: 20,
    paddingBottom: 30,
  },
  form: {
    //margin: 30,
  },
});

export default RunDetailsScreen;
