import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

const SPCAcard = (props) => (
  //pass it props.id so it know what details (pulled from Context state to load)

  <Layout>
    <Image source={require("../assets/backdrop.jpeg")} style={styles.image} />
    <View style={styles.container}>
      <Text>-insert name state</Text>
      <Text>Date of Run: </Text>
    </View>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  image: {
    height: 200,
    width: 350,
  },
});

export default SCPAcard;
