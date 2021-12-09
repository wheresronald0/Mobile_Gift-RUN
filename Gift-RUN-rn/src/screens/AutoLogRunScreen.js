import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Layout, Input, Button } from "@ui-kitten/components";

import { LogRunModal } from "../components/LogRunModal";

import Map from "../components/Map";

const RunDetailsScreen = ({}) => {
  const [autoRunName, setAutoRunName] = useState("");

  return (
    <SafeAreaView>
      <Layout style={styles.container}>
        <LogRunModal />

        <Input
          label="Name of Your Run"
          placeholder="Enter Name"
          value={autoRunName}
          autoCapitalize="words"
          onChangeText={(name) => setAutoRunName(name)}
          style={styles.input}
        />
        <Map />
        <Button style={styles.button}>Start Tracking</Button>
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
  button: {
    marginTop: 30,
    width: "90%",
  },
});

export default RunDetailsScreen;
